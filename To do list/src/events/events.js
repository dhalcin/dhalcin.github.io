import Modal from "../modal/modal";
import AddTask from "../task/task";
import Special from "../specialButtons/special";
import DateModule from "../date/date";
import Notes from "../notes/notes";
import ListPriorities from "../taskPriorities/ListPriorities";
import ShowTaskPriorities from "../ShowTaskPriorities/ShowTaskPriorites";
import Storage from "../storage/storage";
import Modify from "../modifyStorage/modifyStorage";

export default class Events {
    constructor(storedTasks) {
        this.modal = new Modal();
        this.date = new DateModule();
        this.list = new ListPriorities(storedTasks);
        this.storage = new Storage(storedTasks, this.list)
        this.task = new AddTask(this.date, this.list, this.storage, storedTasks);
        this.show = new ShowTaskPriorities(this.list);
        this.special = null;
        this.notes = null;
        this.modify = storedTasks;

        // Setting a flag
        this.flagSpecial = null;
        this.flagNote = null;
        this.oldElements = null;
    }

    // Method to verify if the task can be added successfully
    verification(listElements) {
        return this.task.addTask(listElements);
    }

    clearClosed() {
        this.task.resetForm();
        this.modal.closedModal();
    }

    click() {
        document.addEventListener('click', e => {
            
            // Check if the target element is not radio type input
            if (e.target.type !== 'radio') e.preventDefault();
            
            this.keys();
            
            let element = e.target;
            
            switch (element.id) {
                case 'addBtn':
                    this.modal.openModal();
                    break;
                
                case 'closed-btn':
                    this.clearClosed();
                    break;
                
                case 'dueDate':
                    this.date.show();
                    break;
                
                // Save task and close modal when the save button is clicked, if verification is successful
                case 'save-btn':

                    // * Get the true os 'flag' and add edits to the current task, using 'trash()' and immediately adding the new 'edited task'
                    // ** The value returned by ´this.special.edit´, the list of DOM elements are used as a form of memory to keep track of the
                    // ** task that is being modified
                    if (this.flagSpecial && this.verification(this.oldElements)) {

                        // Since there is already an instance of 'Special' you can use 'trash()'
                        this.special.trash();
                        this.modal.closedModal();
                        this.flagSpecial = null; 
                    }

                    if (this.verification()) this.modal.closedModal();
                    break;
                    
                case 'add-notes':
                    this.notes = new Notes();
                    if (!this.flagNote) this.flagNote = this.notes.openNote();
                    break;
                
                case 'add-note':
                    this.notes.addNote();
                    this.flagNote = null;
                    break;
                
                case 'discard':
                    this.notes.discardNote();
                    this.flagNote = null;
                    break;
                
                case 'btn-allTasks':
                    this.show.allTasks();
                    break;
                
                case 'btn-low':
                    this.show.priorityLow()
                    break;
                
                case 'btn-medium':
                    this.show.priorityMedium();
                    break;
                
                case 'btn-high':
                    this.show.priorityHigh();

                default:
                    break;
            }
            
            // Close modal when clicking outside the modal content
            // `this.modal.modal` refers to the modal element select in the Modal class constructor
            if (element === this.modal.modal) return this.clearClosed();
            
            // Check if the clicked element is the edit button (pencil icon)
            if ((element.classList).contains('bi-pencil')) {

                // An instance of 'Special' is only created when the dit button is clicked
                this.special = new Special(element, this.date);
                this.modal.openModal();

                // Entering the arguments task name, task description, task date, task priority
                const edit = this.special.edit(this.task.taskName, this.task.description, this.task.dueDate, this.task.inpts);
                
                // ´this.special.edit´ returns a list with all the elements of the task (DOM) except for :
                // bi-pencil and bi-trash3 which will always be constant for all tasks
                this.oldElements = edit;
                
                this.flagSpecial = true;
                
            }

            // Check in the clicked element is delete button (trash icon)
            if (element.classList.contains('bi-trash3')) {
                // DOM
                const special = new Special(element, this.date);

                // LocalStorage
                // Entering the arguments task name, task description, task date, task priority
                const elements = special.edit(this.task.taskName, this.task.description, this.task.dueDate, this.task.inpts);
                
                const remove = new Modify(this.modify);
                remove.removeTask(elements); // localStorage
                 
                // DOM
                special.trash(); 
            }

            // Remove note
            if (element.classList.contains('bi-trash2')) {
                this.notes.removeNotes(element);
            }

        });
    }

    keys() {
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') this.clearClosed();

            // Save task and close modal when Enter key is pressed, if verification is successful
            if (e.key === 'Enter' && this.verification()) this.modal.closedModal();
        });
    }

    remeber() {
        this.list.listStoredTask();
    }
}

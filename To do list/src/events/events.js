import Modal from "../modal/modal";
import AddTask from "../task/task";
import Special from "../specialButtons/special";
import DateModule from "../date/date";

export default class Events {
    constructor() {
        this.modal = new Modal();
        this.date = new DateModule();
        this.task = new AddTask(this.date);
        this.special = null;
        
        // Setting a flag
        this.flag = null;
    }

    // Method to verify if the task can be added successfully
    verification() {
        return this.task.addDiv();
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

                    // Get the true os 'flag' and add edits to the current task, using 'trash()' and immediately adding the new 'edited task'
                    if (this.flag && this.verification()) {

                        // Since there is already an instance of 'Special' you can use 'trash()'
                        this.special.trash();
                        this.modal.closedModal();
                        this.flag = null;
                    }

                    if (this.verification()) this.modal.closedModal();
                    break;

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
                this.special.edit(this.task.taskName, this.task.description, this.task.dueDate, this.task.inpts);
                this.flag = true;
                
            }

            // Check in the clicked element is delete button (trash icon)
            if (element.classList.contains('bi-trash3')) {
                const special = new Special(element, this.date);
                special.trash();
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
}
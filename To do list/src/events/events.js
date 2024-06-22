import Modal from "../modal/modal";
import AddTask from "../task/task";
import Special from "../specialButtons/special";

export default class Events {
    constructor() {
        this.modal = new Modal();
        this.task = new AddTask();
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
            e.preventDefault();
            
            this.keys();
            
            let element = e.target;
            const special = new Special(element);

            if (element.id === 'addBtn') this.modal.openModal();

            if (element.id === 'closed-btn') this.clearClosed();

            // Save task and close modal when the save button is clicked, if verification is successful
            if (element.id === 'save-btn' && this.verification()) this.modal.closedModal();

            // Close modal when clicking outside the modal content
            // `this.modal.modal` refers to the modal element select in the Modal class constructor
            if (element === this.modal.modal) return this.clearClosed();
            
            // Check if the clicked element is the edit button (pencil icon)
            if ((element.classList).contains('bi-pencil')) {
                this.modal.openModal();
                special.edit();
            }

            // Check in the clicked element is delete button (trash icon)
            if (element.classList.contains('bi-trash3')) {
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
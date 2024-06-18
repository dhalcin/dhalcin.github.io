import AddTask from "../task/task";
import Modal from "../modal/modal";

export default class Event {
    constructor(button) {
        this.button = button;
        this.modal = new Modal();
        this.task = new AddTask();
    }

    clearClosed() {
        this.task.resetForm();
        this.modal.closedModal();
    }

    verification() {
        if (this.task.addDiv()) return true;
    }

    eventHandler(btn) {
        this.button.addEventListener('click', e => {
            e.preventDefault();
            switch (btn) {
                case 'add':
                    this.modal.openModal();
                    document.addEventListener('keydown', e => {
                        if (e.key === 'Escape') this.clearClosed();
                        if (e.key === 'Enter' && this.verification()) this.modal.closedModal();
                    })

                    document.addEventListener('click', e => {
                        if (e.target === document.querySelector('.modal')) this.clearClosed();
                    })

                    break;
                
                case 'closed':
                    this.clearClosed();
                    break;

                case 'save':
                    if (this.verification()) this.modal.closedModal();
                    break;

                default:
                    break;
            }
        })

    }
}
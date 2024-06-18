import AddTask from "../task/task";
import Modal from "../modal/modal";

export default class Button {
    constructor(button) {
        this.button = button;
        this.modal = new Modal();
        this.task = new AddTask();
    }

    eventClick(btn) {
        this.button.addEventListener('click', e => {
            e.preventDefault();
            switch (btn) {
                case 'add':
                    this.modal.openModal();
                    break;
                
                case 'closed':
                    this.modal.closedModal();
                    break;

                case 'save':
                    if (this.task.addDiv()) this.modal.closedModal();
                    break;

                default:
                    break;
            }
        })

    }
}
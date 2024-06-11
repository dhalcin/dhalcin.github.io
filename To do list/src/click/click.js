import AddTask from "../task/task";
import Modal from "../modal/modal";

export default class Button {
    constructor(button) {
        this.button = button;
        this.modal = new Modal();
    }

    eventClick(btn) {
        this.button.addEventListener('click', e => {
            e.preventDefault();
            switch (btn) {
                case 'add':
                    console.log('add');
                    this.modal.openModal();
                    break;
                
                case 'closed':
                    console.log('closed');
                    this.modal.closedModal();
                    break;

                case 'save':
                    console.log('save form');
                    this.modal.closedModal();
                    break;

                default:
                    break;
            }
        })

    }
}
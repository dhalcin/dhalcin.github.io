import AddTask from "../task/task";
import Modal from "../modal/modal";

export default class Button {
    constructor(button) {
        this.button = button;
        //this.task = new AddTask();
        this.modal = new Modal();
    }

    eventClick() {
        this.button.addEventListener('click', () => {
            //this.task.addDiv();   
            this.modal.getModal();
        });
    }
}
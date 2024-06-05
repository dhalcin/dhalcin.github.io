import AddTask from "../task/task";

export default class Button {
    constructor(button) {
        this.button = button;
        this.task = new AddTask();
    }

    eventClick() {
        this.button.addEventListener('click', () => {
            this.task.addDiv();   
        });
    }
}
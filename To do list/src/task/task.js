export default class AddTask {
    constructor() {
        this.container = document.querySelector('.tasks');
    }

    addDiv() {
        this.task = document.createElement('div');
        this.task.classList.add('task');
        this.container.appendChild(this.task);
    }
}
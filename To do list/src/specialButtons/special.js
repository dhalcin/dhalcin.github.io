export default class Special {
    // Constructor accepts an element and finds the closest '.task' container
    constructor(element) {
        this.container = element.closest('.task');
    }

    edit() {
        // Get the task name element within the task container
        const taskName = (this.container).querySelector('.task-name h3');

        // Get the task description element within the task container
        const taskDescription = (this.container).querySelector('.text-description');
        console.log(taskName.textContent, taskDescription.textContent);
    }

    trash() {
        // Remove the task container from the DOM
        const trash = this.container;
        trash.remove();
    }
}
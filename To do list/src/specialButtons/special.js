import DateModule from "../date/date";

export default class Special {
    // Constructor accepts an element and finds the closest '.task' container
    constructor(element, date) {
        this.date = date;
        this.container = element.closest('.task');
    }

    edit(nameInput, descriptionInput, dateInpt, prioritysInpt) {
        // Get the task name element within the task container
        const taskName = this.container.querySelector('.task-name h3');

        nameInput.value = taskName.textContent;

        const taskDate = this.container.querySelector('.task-duedate');

        // Get the date of the task, giving it a correct format and adding it to the modal
        dateInpt.value = this.date.ParseIso(taskDate.textContent);

        // Get the `i` element representing the task priority within the task container
        const priorityIcon = this.container.querySelector('.bi-circle');

        // Retrieve the `dataset` from the `i` element
        const priority = priorityIcon.dataset.priority;
        
        if (priority === 'low') prioritysInpt[0].checked = true;

        if (priority === 'medium') prioritysInpt[1].checked = true;

        if (priority === 'high') prioritysInpt[2].checked = true;

        // Get the task description element within the task container
        const taskDescription = this.container.querySelector('.text-description');
        
        descriptionInput.value = taskDescription.textContent;

    }

    trash() {
        // Remove the task container from the DOM
        const trash = this.container;
        trash.remove();
    }
}
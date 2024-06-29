import DateModule from "../date/date";

export default class Special {
    // Constructor accepts an element and finds the closest '.task' container
    constructor(element, date) {
        this.date = date;
        this.container = element.closest('.task');

        // It is initialized as 'null' to be able to obtain the target of the events in 'Events'
        this.taskName = null;
        this.taskDate = null;
        this.priorityIcon = null;
        this.taskDescription = null;
    }

    edit(nameInput, descriptionInput, dateInpt, prioritysInpt) {
        // Get the task name element within the task container
        this.taskName = this.container.querySelector('.task-name h3');

        nameInput.value = this.taskName.textContent;

        this.taskDate = this.container.querySelector('.task-duedate');

        // Get the date of the task, giving it a correct format and adding it to the modal
        dateInpt.value = this.date.ParseIso(this.taskDate.textContent);

        // Get the `i` element representing the task priority within the task container
        this.priorityIcon = this.container.querySelector('.bi-circle');

        // Retrieve the `dataset` from the `i` element
        const priority = this.priorityIcon.dataset.priority;
        
        if (priority === 'low') prioritysInpt[0].checked = true;

        if (priority === 'medium') prioritysInpt[1].checked = true;

        if (priority === 'high') prioritysInpt[2].checked = true;

        // Get the task description element within the task container
        this.taskDescription = this.container.querySelector('.text-description');
        
        descriptionInput.value = this.taskDescription.textContent;

    }

    trash() {
        // Remove the task container from the DOM
        const trash = this.container;
        trash.remove();
    }
}
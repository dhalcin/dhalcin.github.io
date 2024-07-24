export default class Storage {
    constructor(storedTasks) {
        // The tasks can be an empty array or an array with previously stored tasks
        this.storedTasks = storedTasks;
    }

    getSave(nameTask, description , priority, date) {
        let task = {
            "name": nameTask,
            "description": description,
            "priority": priority,
            "date": date
        }

        this.storedTasks.push(task);
        
        // Converts the storedTasks array to a JSON string and stores it in localStorage
        localStorage.setItem('tasks', JSON.stringify(this.storedTasks));
    }
}

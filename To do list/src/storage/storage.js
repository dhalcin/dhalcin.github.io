export default class Storage {
    constructor(storedTasks, list) {
        // * The tasks can be an empty array or an array with previously stored tasks
        this.storedTasks = storedTasks;
        this.list = list;
    }

    listTasks(priority, div) {
        /* According to the value of the 'priority' property the whole task (div.task)
        is saved in its correspondig list in the module 'listPriorities.js' */

        if (priority === 'low') this.list.lowPriority(div);
        if (priority === 'medium') this.list.mediumPriority(div);
        if (priority === 'high') this.list.highPriority(div);
        
        this.list.allsTasks(div);
    }

    getSave(div, nameTask, description , priority, date) {
        
        let task = {
            "name": nameTask,
            "description": description,
            "priority": priority,
            "date": date,
            "pencil": null,
            "trash": null
        }

        this.listTasks(priority, div);

        this.storedTasks.push(task);

        // * Converts the storedTasks array to a JSON string and stores it in localStorage
        localStorage.setItem('tasks', JSON.stringify(this.storedTasks));
    }
}

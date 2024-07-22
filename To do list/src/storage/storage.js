export default class Storage {
    constructor() {
        this.tasks = [];
    }
    
    store() {
        return localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    getSave(nameTask, description , priority, date) {
        const storedTask = localStorage.getItem('tasks');
        
        let task = {
            "name": nameTask,
            "description": description,
            "priority": priority,
            "date": date
        }

        if (!storedTask) {
            this.tasks.push(task);
            this.store();
        //
        } else {
            this.tasks = JSON.parse(storedTask);
            this.tasks.push(task);
            this.store();
        }
    }
}

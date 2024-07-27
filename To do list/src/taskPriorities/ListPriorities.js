import Create from '../createElements/createElements'

export default class ListPriorities {
    constructor(storedTasks) {
        this.create = new Create();
        this.storedTasks = storedTasks;
        this.container = document.querySelector('.tasks');
        this.child = this.container.children;
        this.low = [];
        this.medium = [];
        this.high = [];
        this.alls = [];
    }

    // Get all tasks from the localStorage when re-entering the To do list and save the in their corresponding list
    listStoredTask() {
        const tasks = this.storedTasks;
        const len = tasks.length;

        if (len !== 0) {
            for (let obj = 0; obj < len; obj++) {
                Object.entries(tasks[obj]).forEach(([key, value], index) => {
                    if (index === 0) this.create.createElement('h3', 'task-name', value);
                    if (index === 1) this.create.createElement('p', 'text-description', value);
                    if (index === 2) this.create.createElement('span', 'priority', value);
                    if (index === 3) this.create.createElement('span', 'task-dueddate', value)
                });
            }
        }
    }
    

    allsTasks(task) {
        this.alls.push(task);
    }

    lowPriority(task) {
        this.low.push(task);
    }

    mediumPriority(task) {
        this.medium.push(task);
    }

    highPriority(task) {
        this.high.push(task);
    }
}

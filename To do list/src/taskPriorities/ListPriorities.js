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
                // For each task stored in localStorage a div.task container is created
                const task = this.create.div('task', this.container);

                Object.entries(tasks[obj]).forEach(([key, value], index) => {
                    // For each task element that is the name, description, priority, date, edit and delete a container is created, div.task-div
                    const taskDiv = this.create.div('task-div', task);

                    /*
                    * Depending on the array index (tasks[obj]) the property will be accessed. According to the property the new node will be
                    * created taking into account the value (textContent) of if it is a button (priority, pencil or trash)  
                    */
                    switch (index) {
                        case 0:
                            this.create.h3_P_Span('h3', value, taskDiv);
                            break;
                        
                        case 1:
                            this.create.h3_P_Span('p', value, taskDiv);
                            break;

                        case 2:
                            this.create.buttons('bi-circle', value, taskDiv);
                            break;

                        case 3:
                            this.create.h3_P_Span('span', value, taskDiv);
                            break;

                        case 4:
                            this.create.buttons('bi-pencil', null, taskDiv);
                            break;

                        case 5:
                            this.create.buttons('bi-trash3', null, taskDiv);
                            break;

                        default:
                            break;
                    }

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

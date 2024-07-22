import DateModule from "../date/date";
import ListPriorities from "../taskPriorities/ListPriorities";
import Storage from "../storage/storage";

export default class AddTask {
    constructor(dateModule, list, storage) {
        this.container = document.querySelector('.tasks');

        // * Modal
        this.taskName = document.getElementById('taskName');
        this.dueDate = document.getElementById('dueDate');
        this.inpts = document.querySelectorAll('.inpt-priority');
        this.description = document.getElementById('description');
        // * Modal

        // Get methods from DateModule class
        this.dateModule = dateModule;
        this.list = list;
        this.storage = storage;
    }

    validateInputs() {
        return this.taskName.value !== '' && this.description.value !== '';
    }

    createButton(iconClass, color = null) {
        const button = document.createElement('button');
        button.classList.add('button-task');

        const icon = document.createElement('i');
        icon.classList.add(iconClass);

        if (color) icon.style.color = color;    

        button.appendChild(icon);
        return button;
    }

    createTaskDiv(task) {
        for (let e = 0; e < 6; e++) {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-div')
            task.appendChild(taskDiv);
        }
    }

    setPriority(lastChild) {

        for (let element of this.inpts) {
            if (element.checked) {
                let color;
                let priority;

                // Depending on the `id` of the `input` it is assigned to the variable `priority`
                switch (element.id) {
                    case 'low':
                        color = 'yellow';
                        priority = 'low';
                        break;
                    
                    case 'medium':
                        color = 'blue';
                        priority = 'medium';
                        break;
                    
                    case 'high':
                        color = 'red';
                        priority = 'high';
                        break;
                    
                    default:
                        break;
                }

                const priorityButton = this.createButton('bi-circle', color);

                // The element `i` is obtained and `dataset` is assigned based on the variable priority
                priorityButton.querySelector('i').dataset.priority = priority;
                lastChild[2].appendChild(priorityButton);
                
                return priority;
            }
        }
    } 

    taskLocation() {

        // Obtain all tasks
        const tasks = Array.from(this.container.querySelectorAll('.task'));

        // Obtaining all task dates
        let taskDatePairs = tasks.map(task => {
            const taskDateText = task.querySelector('.task-duedate').textContent;
            return { taskDateText, task  };
        });
        
        // Entering the date list
        const sortedDates = this.dateModule.compareTaskDates(taskDatePairs.map(pair => pair.taskDateText));
        
        let sortedTasks = [];

        // Reorder task elements in the DOM based on the obtained ordered dates
        sortedDates.forEach(date => {
            const taskWithSameDate = taskDatePairs.filter(pair => pair.taskDateText === date).map(pair => pair.task);
            sortedTasks = sortedTasks.concat(taskWithSameDate);
        })

        // Removed child elements of "this.container" execpt "div.legend"
        while (this.container.children.length > 1) {
            this.container.removeChild(this.container.lastChild);
        }

        // Adding tasks to the DOM based on the dates obtained (sortedTask)
        sortedTasks.forEach(task => {
            this.container.appendChild(task);
        });


      }


    resetForm() {
        this.taskName.value = '';
        this.description.value = '';

        // Assings task priority (modal) to default values
        this.inpts[0].checked = true;

        // Get the value of 'input' in correct format
        this.dueDate.value = this.dateModule.dateIso();
    }

    listTasks(priority, task) {
        if (priority === 'low') this.list.lowPriority(task);
        if (priority === 'medium') this.list.mediumPriority(task);
        if (priority == 'high') this.list.highPriority(task);
    }

    taskStorage(nameTask, description, priority, date) {
        this.storage.getSave(nameTask, description, priority, date);
    }

    addTask() {
        if (!this.validateInputs()) {
            return false;
        }

        const task = document.createElement('div');
        task.classList.add('task');
        this.createTaskDiv(task);
        this.container.appendChild(task);

        const lastTask = this.container.lastElementChild;
        const lastChild = lastTask.children;

        const h3 = document.createElement('h3');
        h3.textContent = this.taskName.value;
        lastChild[0].classList.add('task-name');
        lastChild[0].appendChild(h3);

        const p = document.createElement('p');
        p.classList.add('text-description');
        p.textContent = this.description.value;
        
        lastChild[1].appendChild(p);

        const priority = this.setPriority(lastChild);
        const span = document.createElement('span');
        span.classList.add('task-duedate');
        
        // The content of the 'span' in an appropriate format
        span.textContent = this.dateModule.formatIso(this.dueDate);
        lastChild[3].appendChild(span);

        const btnPencil = this.createButton('bi-pencil');
        lastChild[4].appendChild(btnPencil);

        const btnTrash = this.createButton('bi-trash3');
        lastChild[5].appendChild(btnTrash);

        this.resetForm();
        this.taskLocation();

        this.listTasks(priority, task);

        this.taskStorage(h3.textContent, p.textContent, priority, span.textContent);
        return true;
    }
}

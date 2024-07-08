import DateModule from "../date/date";

export default class AddTask {
    constructor(dateModule) {
        this.container = document.querySelector('.tasks');

        // * Modal
        this.taskName = document.getElementById('taskName');
        this.dueDate = document.getElementById('dueDate');
        this.inpts = document.querySelectorAll('.inpt-priority');
        this.description = document.getElementById('description');
        // * Modal

        // Get methods from DateModule class
        this.dateModule = dateModule;
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
            }
        }
    } 


    taskLocation() {

        // Obtain all tasks
        const tasks = document.querySelectorAll('.task');

        let dates = [];

        // Obtaining all task dates
        tasks.forEach(element => {
            const taskDate = element.querySelector('.task-duedate').textContent;
            dates.push(taskDate);
        });
        this.dateModule.compareDates(dates);
    }

    resetForm() {
        this.taskName.value = '';
        this.description.value = '';

        // Assings task priority (modal) to default values
        this.inpts[0].checked = true;

        // Get the value of 'input' in correct format
        this.dueDate.value = this.dateModule.dateIso();
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

        this.setPriority(lastChild);
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
        this.taskLoction();
        return true;
    }
}
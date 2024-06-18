export default class AddTask {
    constructor() {
        this.container = document.querySelector('.tasks');
        this.taskName = document.getElementById('taskName');
        this.dueDate = document.getElementById('dueDate');
        this.inpts = document.querySelectorAll('.inpt-priority');
        this.description = document.getElementById('description');
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
            task.appendChild(taskDiv);
        }
    }

    setPriority(lastChild) {
        for (let element of this.inpts) {
            if (element.checked) {
                let color;
                if (element.id === 'low') color = 'yellow';
                if (element.id === 'medium') color = 'blue';
                if (element.id === 'high') color = 'red';
                const priorityButton = this.createButton('bi-circle', color);
                lastChild[2].appendChild(priorityButton);
            }
        }
    }

    resetForm() {
        this.taskName.value = '';
        this.description.value = '';
    }

    addDiv() {
        if (!this.validateInputs()) {
            return false;
        }

        const task = document.createElement('div');
        task.classList.add('task');
        this.createTaskDiv(task);
        this.container.appendChild(task);

        const lastTask = this.container.lastElementChild;
        const lastChild = lastTask.children;

        lastChild[0].textContent = this.taskName.value;
        lastChild[1].classList.add('text-description');
        lastChild[1].textContent = this.description.value;
        
        this.setPriority(lastChild);
        lastChild[3].textContent = this.dueDate.value;

        const btnPencil = this.createButton('bi-pencil');
        lastChild[4].appendChild(btnPencil);

        const btnTrash = this.createButton('bi-trash3');
        lastChild[5].appendChild(btnTrash);

        this.resetForm();
        return true;
    }
}
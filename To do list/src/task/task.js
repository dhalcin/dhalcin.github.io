import Element from "../element/element";

export default class AddTask {
    constructor() {
        this.container = document.querySelector('.tasks');
        this.taskName = document.getElementById('taskName');
        this.dueDate = document.getElementById('dueDate');
        this.inpts = document.querySelectorAll('.inpt-priority');
        this.description = document.getElementById('description');
    }

    addDiv() {
        const task = document.createElement('div');
        task.classList.add('task');

        for (let e = 0; e < 6; e++) {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-div');
            task.appendChild(taskDiv);
        }

        const childContainer = this.container.children;

        this.container.appendChild(task);

        const lastTask = childContainer[childContainer.length - 1];
        const lastChild = lastTask.children;

        lastChild[0].textContent = `${this.taskName.value}`;
        lastChild[1].classList.add('text-description');
        lastChild[1].textContent = `${this.description.value}`;

        for (let element of this.inpts) {
            if (element.checked) {
                const button = document.createElement('button');
                button.classList.add('button-task');

                const i = document.createElement('i');
                i.classList.add('bi-circle');
                
                if (element.id === 'low') i.style.color = 'yellow';
                if (element.id === 'medium') i.style.color = 'blue';
                if (element.id === 'high') i.style.color = 'red';

                button.appendChild(i);
                lastChild[2].appendChild(button);
            }
        }

        lastChild[3].textContent = `${this.dueDate.value}`;
        const btn1 = document.createElement('button');
        btn1.classList.add('button-task');
        const i1 = document.createElement('i');
        i1.classList.add('bi-pencil');
        btn1.appendChild(i1);
        
        lastChild[4].appendChild(btn1);
    
        const btn2 = document.createElement('button');
        btn2.classList.add('button-task');
        const i2 = document.createElement('i');
        i2.classList.add('bi-trash3');
        btn2.appendChild(i2);

        lastChild[5].appendChild(btn2);
    }
}
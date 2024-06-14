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

        const titleTask = document.createElement('h3');
        titleTask.classList.add('task-title');
        titleTask.textContent = `${this.taskName.value}`;
        task.appendChild(titleTask);

        const taskDescription = document.createElement('div');
        taskDescription.textContent = `${this.description.value}`;
        task.appendChild(taskDescription);

        const priority = document.createElement('div');
        for (let element of this.inpts) {
            if (element.checked) {
                const btn = document.createElement('button');
                btn.classList.add('button-task');
                const i = document.createElement('i');
                i.classList.add('bi-circle');

                btn.appendChild(i);
                priority.appendChild(btn);
            }
        }

        task.appendChild(priority);

        const taskDate = document.createElement('div');
        taskDate.textContent = `${this.dueDate.value}`
        task.appendChild(taskDate);

        const edit = document.createElement('div');
        const editBtn = document.createElement('button');
        editBtn.classList.add('button-task');
        const editI = document.createElement('i');
        editI.classList.add('bi-pencil');

        editBtn.appendChild(editI);
        edit.appendChild(editBtn);
        task.appendChild(edit);

        const delet = document.createElement('div');
        const delBtn = document.createElement('button');
        delBtn.classList.add('button-task');
        const delI = document.createElement('i');
        delI.classList.add('bi-trash3');

        delBtn.appendChild(delI);
        delet.appendChild(delBtn);
        task.appendChild(delet);

        this.container.appendChild(task);
    }
}
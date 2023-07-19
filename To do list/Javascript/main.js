

let count = 0;

const button = document.getElementById('btn');
const listtasks = document.getElementById('list');

button.addEventListener('click', e => {
    e.preventDefault();
    const tasks = document.createElement('li');
    count++;
    tasks.id = `task${count}`;
    tasks.textContent = input.value;
    listtasks.appendChild(tasks);
    input.value = '';


});


let count = 0;

const input = document.getElementById('inpt');
const button = document.getElementById('btn');
const listtasks = document.getElementById('list');
const removeButton = document.getElementById('remove');

button.addEventListener('click', e => {
    count++;
    e.preventDefault();
    
    if (count <= 10) {
        const tasks = document.createElement('li');
        const btnli = document.createElement('button');
    
        tasks.textContent = input.value;
        listtasks.appendChild(tasks);
        tasks.appendChild(btnli);
        input.value = '';

        btnli.addEventListener('click', ()=>{
            listtasks.removeChild(tasks);
        });
    }


});

removeButton.addEventListener('click', e => {
    e.preventDefault();
    listtasks.innerHTML = '';
});


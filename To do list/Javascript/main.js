
let count = 0;

const input = document.getElementById('inpt');
const button = document.getElementById('btn');
const listtasks = document.getElementById('list');
const removeButton = document.getElementById('remove');

button.addEventListener('click', e => {
    e.preventDefault();

    //Evaluating  the tasks entered
    if ((input.value) != 0) {
    
        count++;
        const tasks = document.createElement('li');
        const btnli = document.createElement('button');
    
        tasks.textContent = input.value;
        listtasks.appendChild(tasks);
        tasks.appendChild(btnli);
        input.value = '';

        btnli.addEventListener('click', ()=>{
            listtasks.removeChild(tasks);
        });
    
    } else {
        alert('Error! ingresa un valor');
    }
    //Evaluating the tasks entered

});

removeButton.addEventListener('click', e => {
    e.preventDefault();
    listtasks.innerHTML = '';
    input.focus();
});



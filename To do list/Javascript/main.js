
let count = 0;

const input = document.getElementById('inpt');
const button = document.getElementById('btn');
const listtasks = document.getElementById('list');
const removeButton = document.getElementById('remove');

button.addEventListener('click', e => {
    e.preventDefault();

    //Evaluating  the tasks entered
    if (input.value != 0) {
        count++;
        const tasks = document.createElement('li');
        const btnli = document.createElement('button');

        tasks.innerHTML = `<p>${input.value}</p>`;
        btnli.textContent = 'x';
        tasks.appendChild(btnli);
        listtasks.appendChild(tasks);
        input.value = '';

        btnli.addEventListener('click', ()=>{
            listtasks.removeChild(tasks);
        });
    
    } else {
        /*Adding SweetAlert2*/
        Swal.fire({
            title:'Error ingresa una tarea'
        });
        input.value = '';
    }
    //Evaluating the tasks entered

});

removeButton.addEventListener('click', e => {
    e.preventDefault();
    listtasks.innerHTML = '';
    input.focus();
});



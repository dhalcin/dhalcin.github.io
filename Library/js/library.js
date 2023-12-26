
const add = document.getElementById('add');
const dialog = document.getElementById('dialog');
const save = document.getElementById('save');
const closed = document.getElementById('closed');

const content = document.getElementsByClassName('content');
const div = document.createElement('div');
div.classList.add('book')

function closedDialog() {
    dialog.close();
}

add.addEventListener('click', ()=> {
    dialog.showModal();
})

save.addEventListener('click', ()=> {
    content.appendChild(div);
})
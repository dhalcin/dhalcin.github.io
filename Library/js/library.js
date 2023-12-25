
const add = document.getElementById('add');
const dialog = document.getElementById('dialog');
const save = document.getElementById('save');
const closed = document.getElementById('closed');

function closedDialog() {
    dialog.close();
}

add.addEventListener('click', ()=> {
    dialog.showModal();
})
save.addEventListener('click', e => {
    
    closedDialog();
})
closed.addEventListener('click', e => {
    e.preventDefault();
    closedDialog();
})
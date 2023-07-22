
const image = document.querySelectorAll('img');
const divGallery = document.getElementById('gallery');
const div = document.getElementById('show');
const button = document.createElement('button');

function addButton() {  
    button.id = 'btn';
    button.textContent = 'X';
    button.style.position = 'absolute';
    divGallery.appendChild(button);
    
}

function addDiv() {
    div.style.width = '90%';
    div.style.height = '75%';
}

image.forEach(img => {
    img.addEventListener('click', ()=> {
        addDiv();
        addButton();
    });
});

button.addEventListener('click', ()=> {
    div.innerHTML = '';
});


const image = document.querySelectorAll('img');
const contentDiv = document.getElementById('show-images');
const btn = document.getElementById('remove');
const div = document.getElementById('show');

function addElement(index) {

    if (contentDiv) {
        contentDiv.style.display = 'block'
    }

    if (btn) {
        btn.style.display = 'block';
    }

    if (div) {
        div.style.backgroundImage = `url(/images/${index + 1}.jpg)`;
        div.style.display = 'block';
    }
}

function removeElement() {
    contentDiv.style.display = 'none';
}

image.forEach((img, index) => {
    img.addEventListener('click', ()=> {
        addElement(index);
    });
});

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        removeElement();
    }
});

btn.addEventListener('click', ()=> {
    removeElement();
});

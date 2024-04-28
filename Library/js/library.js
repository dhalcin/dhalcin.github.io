class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class UI {
    add(book) {
        const element = document.createElement('div');
        element.innerHTML = `
                <strong>Title</strong>: ${book.title}
                <strong>Author</strong>: ${book.author}
                <strong>Pages</strong>: ${book.pages}
                <button name='delete'>Delete</button>
        `;

        content.appendChild(element);
    }

    delete(element) {
        if (element.name === 'delete') {
            element.parentElement.remove()
            this.showMessage();
        }
    }

    showMessage() {
        alert('Libro borrado')
    }
}

const dialog = document.getElementById('dialog');
const content = document.querySelector('.content');

document.getElementById('add').addEventListener('click', ()=> {
    dialog.showModal();
});

document.getElementById('save').addEventListener('click', ()=> {
    const title = document.getElementById('title-book').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    if (title && author && pages) {
        const book = new Book(title, author, pages);
        const ui = new UI();
        ui.add(book);
        dialog.close();
    } else {
        alert('completa');
    }
});

content.addEventListener('click', (e)=> {
    const ui = new UI();
    ui.delete(e.target);
})

const add = document.getElementById('add');
const dialog = document.getElementById('dialog');
const save = document.getElementById('save');
const closed = document.getElementById('closed');
const content = document.getElementsByClassName('content')[0];

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function verification(str) {
    return (str).trim() !== '';
}

function renderBooks() {
    content.innerHTML = '';
    books();
}

function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    myLibrary.push(book);
    renderBooks();
}

function books() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        let buttonDelet = document.createElement('button');
        buttonDelet.classList.add('delet');
        book.dataset.index = i;
        book.classList.add('book');
        let readButton = document.createElement('button');
        readButton.classList.add('status')
        readButton.textContent = myLibrary[i].read ? 'Mark Unread' : 'Mark Read';

        readButton.addEventListener('click', ()=> {
            myLibrary[i].read = !myLibrary[i].read;
            readButton.textContent = myLibrary[i].read ? 'Mark Unread' : 'Mark Read';
        })

        book.appendChild(readButton);

        buttonDelet.addEventListener('click', e => {
            const indexToRemove = e.target.parentElement.dataset.index;
            myLibrary.splice(indexToRemove, 1);
            content.innerHTML = '';
            books();
        })

        for (let property in myLibrary[i]) {
            // Formatting : Title, Author and Pages
            let p = document.createElement('p');
            let format = property;
            
            switch (format) {
                case 'title':
                    p.textContent = `Title : ${myLibrary[i][property]}\n`;
                    break;
                
                case 'author':
                    p.textContent = `Author : ${myLibrary[i][property]}\n`;
                    break;
                
                case 'pages':
                    p.textContent = `Pages : ${myLibrary[i][property]}\n`;
            }

            book.appendChild(p);
        }

        book.appendChild(buttonDelet);
        content.appendChild(book);
    }
}

add.addEventListener('click', ()=> {
    dialog.showModal(); 
})

save.addEventListener('click', (e)=> {
    e.preventDefault();
    let title = document.getElementById('title-book').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    
    if (verification(title) && verification(author) && verification(pages)) {
        addBookToLibrary(title, author, pages);
    } 

    //
    dialog.close();
})

closed.addEventListener('click', e => {
    e.preventDefault();
    dialog.close();
})
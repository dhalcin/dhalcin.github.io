
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
    
    // Creating container
    let contentBook = document.createElement('div');
    contentBook.classList.add('contentBook');
    
    // Adding the book container
    let book = document.createElement('div');
    book.dataset.index = i;
    book.classList.add('book-container');

    // Adding the buttons container
    let contentButton = document.createElement('div');
    contentButton.classList.add('buttons-container');

    let readButton = document.createElement('button');
    readButton.classList.add('status')
    readButton.textContent = myLibrary[i].read ? 'Unread' : 'Read';

    let buttonDelet = document.createElement('button');
    buttonDelet.classList.add('delet');
    buttonDelet.innerHTML = '<img src="./images/trash.svg" alt="trash">';

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

    readButton.addEventListener('click', ()=> {
        myLibrary[i].read = !myLibrary[i].read;
        readButton.textContent = myLibrary[i].read ? 'Unread' : 'Read';
        readButton.classList.toggle('unread');
    })

    buttonDelet.addEventListener('click', e => {
        const indexToRemove = e.target.parentElement.dataset.index;
        myLibrary.splice(indexToRemove, 1);
        content.innerHTML = '';
        books();
    })

    contentBook.appendChild(book);
    contentButton.appendChild(readButton);
    contentButton.appendChild(buttonDelet);
    contentBook.appendChild(contentButton);

    content.appendChild(contentBook);
   }

}

add.addEventListener('click', ()=> {
    dialog.showModal(); 
})

save.addEventListener('click', (e)=> {
    e.preventDefault();
    let titleInput = document.getElementById('title-book');
    let authorInput = document.getElementById('author');
    let pagesInput = document.getElementById('pages');
    
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    
    if (verification(title) && verification(author) && verification(pages)) {
        addBookToLibrary(title, author, pages);
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';  
    } 
    dialog.close();
})

closed.addEventListener('click', e => {
    e.preventDefault();
    dialog.close();
})
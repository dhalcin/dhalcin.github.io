
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
    //this.read = read;
}

function verification(str) {
    return (str).trim() !== '';
}

function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    myLibrary.push(book);
}

function books() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        let yes = document.createElement('button');
        let not = document.createElement('button');

        book.classList.add('book');
        
        for (let property in myLibrary[i]) {
            let p = document.createElement('p');
            p.textContent = `${property} : ${myLibrary[i][property]}\n`;
            book.appendChild(p);
            book.appendChild(yes);
            book.appendChild(not);
        }

        content.appendChild(book);
        myLibrary.length = 0;
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
        books();
    } 

    dialog.close();
})

closed.addEventListener('click', e => {
    e.preventDefault();
    dialog.close();
})
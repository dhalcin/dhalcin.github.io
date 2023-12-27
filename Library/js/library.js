
const add = document.getElementById('add');
const dialog = document.getElementById('dialog');
const save = document.getElementById('save');
const closed = document.getElementById('closed');
const content = document.getElementsByClassName('content')[0];
const title = document.getElementById('title-book').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    //this.read = read;
}

function verification(str) {
    return (str.value).trim() !== '';
}

function addBookToLibrary() {
    let book = new Book(title, author, pages);
    myLibrary.push(book);
}

function books() {
    for (let i = 0; i < myLibrary.length; i++) {
        for (let property in myLibrary[i]) {
            console.log(`${property} : ${myLibrary[i][property]}`);
        }
    }
}

add.addEventListener('click', ()=> {
    dialog.showModal(); 
})

save.addEventListener('click', ()=> {
    if (verification(title) && verification(author) && verification(pages)) {
        addBookToLibrary(title, author, pages);
        books();
    }
})
const formModal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal"); 
const closeModal = document.querySelector("#close-modal");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("form");

let myLibrary = [];

//constructor
function Book(title, author, pages, read, id) {

    if (!new.target) {
        throw Error("You have to use the \"new\" keyword to construct a new object");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(library, book) {
    library.push(book);
}

openModal.addEventListener("click", () => {
    formModal.showModal();
});

closeModal.addEventListener("click", () => {
    formModal.close();
});

form.addEventListener("submit", (event)=>{
    //prevents page from refreshing.
    event.preventDefault();

    const book = new Book(title.value, author.value, pages.value, read.value, crypto.randomUUID());
    addBookToLibrary(myLibrary, book);
    console.log(myLibrary);
})

//TODO: loop through the array and display each book. 
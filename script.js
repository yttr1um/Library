const formModal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("form");

let main = document.querySelector("#main-content");

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._read = read;
        this._id = crypto.randomUUID();
    }
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

form.addEventListener("submit", (event) => {
    //prevents page from refreshing.
    event.preventDefault();

    let readBool = (read.checked) ? true : false;

    const book = new Book(title.value, author.value, pages.value, readBool, crypto.randomUUID());
    addBookToLibrary(myLibrary, book);
    console.log(myLibrary);

    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    bookContainer.textContent = title.name;

    for (const [key, value] of Object.entries(book)) {
        let content = document.createElement("div");
        let keys = document.createElement("span");
        let values = document.createElement("p")

        keys.classList.add("key");
        keys.textContent = `${key}`
        values.textContent = ` : ${value}`;

        content.append(keys, values);
        bookContainer.appendChild(content);
    }

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;

    //adding the delete button at the bottom.
    let btnContainer = document.createElement("div");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    btnContainer.classList.add("buttons-container");

    btnContainer.appendChild(deleteBtn);
    bookContainer.appendChild(btnContainer);
    main.appendChild(bookContainer);

    deleteBtn.addEventListener("click", () => {
        main.removeChild(bookContainer)
    })
})
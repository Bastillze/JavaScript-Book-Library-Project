let myLibrary = ["Rich Dad, Poor Dad", "One Piece", "Bone"];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return name, author, pages, read;
  };
}

function addBookToLibrary(name, author, pages, read) {
  This.newBook = function () {
    const Book1 = new Book("Rich Dad, Poor Dad");

    const Book2 = new Book("One Piece");

    const Book3 = new Book("Bone");

    myLibrary.push(Book1, Book2, Book3);
  };
}

for (let i in myLibrary) {
  console.log(myLibrary[i] + " ");
}

function test() {
  alert("Thank you for your input!");
}

let btn = document.createElement("button");
btn.innerHTML = "NEW BOOK";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);

function function2() {}

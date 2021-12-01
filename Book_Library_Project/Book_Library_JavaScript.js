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
    const Book1 = new Book(
      "Rich Dad, Poor Dad",
      "Robert Kiyosaki",
      "235",
      "Read"
    );

    const Book2 = new Book("One Piece", "Eiichiro Oda", "23456", "Not Read");

    const Book3 = new Book("Bone", "Jeff Smith", "2352", "Not Read");

    myLibrary.push(Book1, Book2, Book3);
  };
}

for (let i in myLibrary) {
  console.log(myLibrary[i] + " ");
}

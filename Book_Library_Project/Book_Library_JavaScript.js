let myLibrary = [];

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
    const Book1 = new Book1(
      "Rich Dad, Poor Dad",
      "Robert Kiyosaki",
      "235",
      "Read"
    );

    const Book2 = new Book2("One Piece", "Eiichiro Oda", "23456", "Not Read");

    const Book3 = new Book3("Bone", "Jeff Smith, 2352, Not Read");
  };
}

myLibrary.push(Book1, Book2, Book3);

for (let i in myLibrary) {
  console.log(myLibrary[i] + " ");
}

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

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById("body").appendChild(table);

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Book";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Author Name";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Pages";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement("tr");
let row_2_data_1 = document.createElement("td");
row_2_data_1.innerHTML = "One Piece";
let row_2_data_2 = document.createElement("td");
row_2_data_2.innerHTML = "Eiichiro Oda";
let row_2_data_3 = document.createElement("td");
row_2_data_3.innerHTML = "1000+";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

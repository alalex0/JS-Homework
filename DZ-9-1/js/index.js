/*
Реализовать метод библиотеки getBook(title).
 Метод возвращает книгу с названием равным title
*/

let book = new Book();
book.setTitle("Книга");
book.setPage(45);
book.setYear(2008);

let history = new Book();
history.setTitle("История");
history.setPage(30);
history.setYear(2010);

let mathematics = new Book();
mathematics.setTitle("Математика");
mathematics.setPage(20);
mathematics.setYear(2018);

let library = new Library("Библиотека");

library.addtoLibrary(book);
library.addtoLibrary(history);
library.addtoLibrary(mathematics);

//library.showAllBooks();
library.getBook("История");
library.getBook("Математика");


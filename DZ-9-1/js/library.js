function Library(title, size) {
	let libTitle = title;
	let maxSize = size;
	let books = [];

	//методы
	this.addtoLibrary = function(book) {
		books.push(book);
	};

	this.showAllBooks = function() {
		for (let i = 0; i < books.length; i++) {
				
		//console.log(books[i].getTitle(), books[i].getPage());
		}
	};
		
	this.getBook = function(title) {
			for (let i = 0; i < books.length; i++) {
				if(books[i].getTitle() === title){

					console.log("Название: ", books[i].getTitle(), "Страниц: ", books[i].getPage(), "Год: ", books[i].getYear());
				}
				
			}
		};
		
}
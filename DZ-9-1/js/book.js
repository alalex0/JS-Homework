function Book() {
	let title;
	let page;
	let yaer;

	this.setTitle = function(bookTitle) {
		title = bookTitle;
	};
	this.setPage = function(bookPage) {
		page = bookPage;
	};
	this.setYear = function(bookyaer) {
		yaer = bookyaer;
	};

	this.getTitle = function() {
		return title;
	};
	this.getPage = function() {
		return page;
	};
	this.getYear = function() {
		return yaer;
	};
}
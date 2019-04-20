function Book() {
	let a;
	let b;

	this.setA = function (bookA){
		a = bookA;
	};
	this.getA = function (){
		return a;
	};
	this.getB = function (){
		return b;
	};

}
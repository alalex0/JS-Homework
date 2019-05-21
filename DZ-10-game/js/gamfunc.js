//создание класса
class Unitdrow {
	constructor(xx, yy, imageE){
		this._xx = xx;
		this._yy = yy;
		this._imageE = imageE;
	}
	showDrow(){
		let canvas = document.getElementsByTagName('canvas')[0];
		canvas.widht = 900;
		canvas.height = 600;
		let context = canvas.getContext('2d');
		context.fillStyle = 'green';
		context.fillRect(0, 0, 900, 600);

		
		let catImg = new Image();
		catImg.src = this._imageE;
		let xx = this._xx;
		let yy = this._yy;
		catImg.onload = function () {
				// body....
			context.drawImage(catImg, xx, yy, 80, 80);
		};
	}
	

}


class Unitmove {
	constructor(x1, y1){
		this._x1 = x1;
		this._y1 = y1;

	}
	move(){
		console.log('enemyone', enemyone.x, enemyone.y);
		let x = player.x;
			let y = player.y;
		
		document.addEventListener("keypress", cord );
		function cord(event){
			if(event.code === 'KeyD'){
					x += 4;
					console.log(x);
					
				} else if(event.code === 'KeyA'){
					x -= 4;
				} else if (event.code === 'KeyW') {
					y -= 4;
				} else if (event.code === 'KeyS') {
					y += 4;

				}
				console.log(x, y);
			if(x > enemyone.x - 100 && x < enemyone.x + 80 &&
						y > enemyone.y - 80 && y < enemyone.y +80){
						//console.log('убит', x, enemyone.x);
						gameover.showDrow();
						neca.showDrow();
					}
			if(x > bot.x - 100 && x < bot.x + 80 &&
						y > bot.y - 80 && y < bot.y +80){
						//console.log('друг', x, bot.x);
						
						sponge.showDrow();
						ananas.showDrow();
						//playenemyone.showDrow();
						game.showDrow();
						ananasThree.showDrow();
					}
			if(x >= 160  && y >= 112){
						//console.log('друг', x, ananasbot.x);
						
					return	winners.showDrow();
					}

		}
	
	}		
}

class Unit {
	constructor(name, x, y, image){
		this._name = name;
		this._x = x;
		this._y = y;
		this._image = image;
		this._kill = false;
	}
	
	draw() {
		let canvas = document.getElementsByTagName('canvas')[0];
		canvas.widht = 900;
		canvas.height = 600;
		let context = canvas.getContext('2d');
		context.fillStyle = 'green';
		context.fillRect(0, 0, 900, 600);

		
		let catImg = new Image();
		catImg.src = this.image;
		if(this._name === 'Игрок'){	
			
			catImg.onload = function () {
				// body...
			context.drawImage(catImg, player.x, player.y, 80, 80);
			let x = player.x;
			let y = player.y;
			
			document.addEventListener('keypress', movePic);
			function movePic(event) {
				//console.log(event);
				context.fillStyle = 'green';
				context.fillRect(x, y, 80, 80);

				if(event.code === 'KeyD'){
					x += 4;
				} else if(event.code === 'KeyA'){
					x -= 4;
				} else if (event.code === 'KeyW') {
					y -= 4;
				} else if (event.code === 'KeyS') {
					y += 4;

				}
				
				context.drawImage(catImg, x, y, 80, 80);
			}

			};
		}
		

	}
	
	get name() {
		return this._name;
	}
	get y() {		
		return	this._y;
	}
	get x() {
		return this._x;
	}
	
	get image() {
		return this._image;
	}

};

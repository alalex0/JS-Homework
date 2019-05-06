class Drow {
	constructor(name, x, y, image){
		this._name = name;
		this._x = x;
		this._y = y;
		this._image = image;
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
		if(this._name === 'Бот'){		
			catImg.onload = function () {
				// body...
			context.drawImage(catImg, bot.x, bot.y, 70, 70);
			};
			let x = bot.x;
			let y = bot.y;
			document.addEventListener('keypress', movePic);

			function movePic(event) {
				console.log(event);
				context.fillStyle = 'green';
				context.fillRect(x, y, 70, 70);
				
				 if(event.code === 'KeyD'){
					x += 1;
				} else if(event.code === 'KeyA'){
					x -= 1;
				} else if (event.code === 'KeyW') {
					y -= 1;
				} else if (event.code === 'KeyS') {
					y += 0;

				}
			
				context.drawImage(catImg, x, y, 70, 70);

			}
		}
		if(this._name === 'Враг'){
			
			catImg.onload = function () {
				// body...
			context.drawImage(catImg, enemyone.x, enemyone.y, 70, 70);
			};
			function getRandomX(min, max) {
				  		return Math.random() * (max - min) + min;
				}
			let x = enemyone.x;
			let y = enemyone.y;
			document.addEventListener('keypress', movePic);

			function movePic(event) {
				console.log(event);
				context.fillStyle = 'green';
				context.fillRect(x, y, 70, 70);
				
				 if(event.code === 'KeyD'){
					x = getRandomX(enemyone.x, bot.x);
				} else if(event.code === 'KeyA'){
					x = getRandomX(enemyone.x, bot.x);;
				} else if (event.code === 'KeyW') {
					y = getRandomX(player.y, enemyone.y);
				} else if (event.code === 'KeyS') {
					y = getRandomX(player.y, enemyone.y);

				}
				if(x > player.x - 100 && x < player.x + 80 &&
						y > player.y - 50 && y < player.y +80){
						
						
						
						console.log('убит');
					
					}
				context.drawImage(catImg, x, y, 70, 70);

			}
		}
		console.log(enemyone.x);
		console.log(bot.x);
		console.log(player.x);

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

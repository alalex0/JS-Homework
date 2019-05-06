//создаем объекты класса Unit
let enemyone = new Unit('Враг', 200, 205,"image/enemy.png");
let player = new Unit('Игрок', 100, 0, "image/555.jpg");
let bot = new Unit('Бот', 22, 400, "image/bot.jpg");
let ananasbot = new Unit('Бот', 210, 10, "image/winners.jpg");
//console.log(player);

//let draw = new Draw();

player.draw();
//player.move();
//bot.draw();
//enemyone.draw();

//enemyone.fight(player);

let ananas = new Unitdrow(200, 205, "image/ananas.jpg");
ananas.showDrow();
let ananasTwo = new Unitdrow(10, 350, "image/ananas.jpg");
ananasTwo.showDrow();
let ananasThree = new Unitdrow(205, 450, "image/ananas.jpg");
//ananasThree.showDrow();



let play = new Unitdrow(10, 10, "image/play.jpg");
play.showDrow();
let gameover = new Unitdrow(10, 10, "image/gameover.jpg");
//gameover.showDrow();
let playBot = new Unitdrow(10, 350, "image/bot.jpg");
//playBot.showDrow();
let playplayer = new Unitdrow(100, 0, "image/555.jpg");
playplayer.showDrow();
let playenemyone = new Unitdrow(200, 205, "image/enemy.png");
//playenemyone.showDrow();
let game = new Unitdrow(10, 10, "image/game.png");
//game.showDrow();
let movePlaer = new Unitmove(100, 0);
movePlaer.move();

let sponge = new Unitdrow(10, 350, "image/sponge.jpg");
//sponge.showDrow();

let neca = new Unitdrow(200, 205, "image/neca.jpg");
//neca.showDrow();

let winners = new Unitdrow(210, 10, "image/winners.jpg");
//winners.showDrow();

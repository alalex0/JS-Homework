//создаем объекты класса Unit
let enemyone = new Unit('Враг', 200, 300,"image/enemy.png");
let player = new Unit('Игрок', 100, 0, "image/555.jpg");
let bot = new Unit('Бот', 22, 400, "image/bot.jpg");
console.log(player);

player.draw();
//player.move();
bot.draw();
enemyone.draw();

bot.fight(player);

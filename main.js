var score = 0;
var score_val = 1;
var alien = [];

function setup() {
  createCanvas(800, 600);
  player = new Ship();
  bullet = new Laser();

  for (var i = 0; i < 10; i++) {
    alien[i] = new Enemy(i * 50 + 50, i * 50 + 10);
    //alien[i].y = i * 50;
  }
}

function draw() {
  background(255);
  player.show();
  player.move();
  bullet.show();
  bullet.move();
  for (var i = 0; i < alien.length; i++) {
    alien[i].show();
    alien[i].move();
    if (alien[i].collision()) {
      alien.splice(i, 1);
      score += 5;
    }
  }

  if (alien.length > 0) {
    textSize(16);
    text(score, 10, 30);
  } else {
    textSize(32);
    text("Your score:" + score, width / 2, height / 2);
  }


}


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.setmove(-10);
  } else if (keyCode == RIGHT_ARROW) {
    player.setmove(10);
  }

  if (key == ' ') {
    bullet.x = player.x + player.width / 2;
    bullet.y = player.y - player.height - bullet.lenght;
    if (score) score--;
  }

  if(key == 'N' || key == 'n') {
    console.log("New game");
    for (var i = 0; i < 10; i++) {
      alien[i] = new Enemy(i * 50 + 50, i * 50 + 10);
      score = 0;
    }
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
    player.setmove(0);
  }
}
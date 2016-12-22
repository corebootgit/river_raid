var score = 0;
var score_val = 1;
var alien = [];
var alien_laser = [];

function setup() {
  createCanvas(800, 600);
  player = new Ship();
  bullet = new Laser();

  spawn_enemies();
}

function draw() {
  background(255);
  player.show();
  player.move();
  bullet.show();
  bullet.move();

  for (var i = alien_laser.length - 1; i > 0; i--) {
    alien_laser[i].move();
    alien_laser[i].show();
    if (alien_laser[i].endlife()) {
      alien_laser.splice(i, 1);
    }
  }

  for (var i = alien.length - 1; i > 0; i--) {
    alien[i].show();
    alien[i].move();
    if (alien[i].collision()) {
      alien.splice(i, 1);
      score += 5;
    }

    if (random(0, 1000) > 990) {
      console.log("shoot");
      alien_laser.push(new Alien_Laser(alien[i].x, alien[i].y));
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

function spawn_enemies() {
  for (var i = 0; i < 8; i++) {
    alien[i] = new Enemy(random(50, 750), i * 70 + 10);
    alien_laser[i] = new Alien_Laser();
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

  if (key == 'N' || key == 'n') {
    console.log("New game");
    spawn_enemies();
    //alien[i] = new Enemy(i * 50 + 50, i * 50 + 10);
    //alien[i] = new Enemy(i * 50 + 50, i * 50 + 10);
    score = 0;

  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
    player.setmove(0);
  }
}
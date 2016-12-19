var score = 0;
var score_val = 1;
var slider;

function setup() {
  createCanvas(800, 600);
  player = new Ship();
  bullet = new Laser();
  alien = new Enemy();

  slider = createSlider(0, 255, 100);
  slider.position(50, 10);
  slider.style('width', '380px');

}

function draw() {
	var val = slider.value();

  background(val);
  player.show();
  player.move();
  bullet.show();
  bullet.move();
  alien.show();
  alien.move();

  
  
  if (dist(bullet.x, bullet.y, alien.x, alien.y) < alien.r) {
    if(score_val) {
      alien.r -= 1;
      console.log("Score: %d", score);
    }
    score += score_val;
    score_val = 0;
    bullet.y = 0;
  } else {
    score_val = 1;
  }



  textSize(16);
  text(score, 10, 30);
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
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
    player.setmove(0);
  }
}
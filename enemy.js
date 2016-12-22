function Enemy(xp, yp) {
  this.x = xp; //width / 2;
  this.y = yp; //height / 2;
  this.r = 30;
  this.speed = 10;

  this.move = function() {
    this.x += this.speed;

    if ((this.x > (width - this.r)) || (this.x < (0 + this.r))) {
      this.speed = -this.speed;
      // console.log(this.x);
    }

  }

  this.show = function() {
    push();
    fill(255, 0, 0, 127);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
    pop();
  }

  this.collision = function() {
    if (dist(bullet.x, bullet.y, this.x, this.y) < this.r) {
      return true;
    } else {
      return false;
    }
  }

}

function Alien_Laser(x, y) {
  this.x = x;
  this.y = y;
  this.lenght = 10;
  this.speed = 4;

  this.show = function() {
    line(this.x, this.y + this.lenght, this.x, this.y);
  }

  this.move = function() {
    this.y += this.speed;
  }

  this.endlife = function() {
    if (this.y > height) {
      return true;
    } else {
      return false;
    }
  }


}
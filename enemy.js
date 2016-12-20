function Enemy(xp, yp) {
  this.x = xp; //width / 2;
  this.y = yp; //height / 2;
  this.r = 50;
  this.speed = 8;

  this.move = function() {
    this.x += this.speed;
    // console.log(this.x);
    if (this.x >= width - this.r || this.x <= 0 + this.r) this.speed *= -1;
  }

  this.show = function() {
    push();
    fill(255,0,0,127);
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
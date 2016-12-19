function Enemy() {
  this.x = width / 2;
  this.y = height / 2;
  this.r = 100;
  this.speed = 8;

  this.move = function() {
    this.x += this.speed;
    if (this.x > width-this.r || this.x < 0+this.r) this.speed *= -1;
  }

  this.show = function() {
    //fill(200-this.r*2,0,0);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }

}
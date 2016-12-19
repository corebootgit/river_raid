function Ship() {
  this.width = 16;
  this.height = 32;
  this.x = width / 2;
  this.y = height;
  this.move_speed = 0;

  this.show = function() {
    triangle(this.x, this.y, this.x + this.width, this.y, this.x + this.width / 2, this.y - this.height);
  }

  this.move = function() {
    this.x += this.move_speed;
    if (this.x > width - this.width) this.x = width - this.width;
    if (this.x < 0) this.x = 0;
  }

  this.setmove = function(dir) {
    this.move_speed = dir;
  }
}

function Laser() {
  this.x = width / 2;
  this.y = 0;
  this.lenght = 10;
  this.speed = 10;

  this.show = function() {
    line(this.x, this.y + this.lenght, this.x, this.y );
  }

  this.move = function() {
    this.y -= this.speed;
    if (this.y < 0) {

    }
  }
}
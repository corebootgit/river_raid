function Ship() {
  this.width = 16;
  this.height = 16;
  this.x = width / 2;
  this.y = height;
  this.move_speed = 0;

  this.show = function() {
    push();
    noStroke();

    const baseY = this.y;
    const noseY = this.y - this.height;
    const centerX = this.x + this.width / 2;

    // Draw wings first so they appear behind the fuselage
    fill(100, 149, 237);
    triangle(
      this.x - this.width * 0.4,
      baseY,
      this.x + this.width * 0.2,
      baseY,
      this.x + this.width * 0.05,
      baseY - this.height * 0.45
    );
    triangle(
      this.x + this.width * 0.8,
      baseY,
      this.x + this.width * 1.4,
      baseY,
      this.x + this.width * 0.95,
      baseY - this.height * 0.45
    );

    // Main fuselage
    fill(30, 144, 255);
    triangle(
      this.x + this.width * 0.35,
      baseY,
      this.x + this.width * 0.65,
      baseY,
      centerX,
      noseY
    );

    // Tail fin
    fill(65, 105, 225);
    quad(
      centerX - this.width * 0.1,
      baseY,
      centerX + this.width * 0.1,
      baseY,
      centerX + this.width * 0.05,
      baseY + this.height * 0.25,
      centerX - this.width * 0.05,
      baseY + this.height * 0.25
    );

    // Cockpit highlight
    fill(173, 216, 230);
    ellipse(centerX, baseY - this.height * 0.4, this.width * 0.25, this.height * 0.35);
    pop();
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
  this.speed = 20;

  this.show = function() {
    line(this.x, this.y + this.lenght, this.x, this.y);
  }

  this.move = function() {
    this.y -= this.speed;
    if (this.y < 0) {

    }
  }
}
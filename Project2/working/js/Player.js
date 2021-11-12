class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 3;
    this.vy = 1;
    this.speed = 1;

    this.active = true;

  }


  controls() {
    if (keyIsDown(LEFT_ARROW)) {

      this.x += -this.vx;

    } else if (keyIsDown(RIGHT_ARROW)) {

      this.x += this.vx;

    }

  }

  display() {
    push()
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, 30); //20 is place holdre since there will be a image
    pop();
    if (this.x > width) {
      this.x = 0
    }
    if (this.x < 0) {
      this.x = width
    }
  }









}
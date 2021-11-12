class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.vy = 1;
    this.speed = 0.1;

    this.active = true;

  }


  controls() {
    if (keyIsDown(LEFT_ARROW)) {

      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {

      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
  }

  display() {
    push()
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, 20); //20 is place holdre since there will be a image
    pop();
  }









}
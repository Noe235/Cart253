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









}
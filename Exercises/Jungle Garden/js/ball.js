class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 1;
    this.ax = 0;
    this.ay = 1;
    this.maxSpeed = 10;
    this.size = 40;
    this.active = true;
    this.alive = `no`;
  }
  add() {
    this.maxSpeed = this.maxSpeed + (level * 2);

  }

  move() {
    console.log(this.maxSpeed);
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
    // if (this.y - this.size / 2 < 1) {
    //   this.active = false;
    // }
  }

  bounce(paddle) {
    if (this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2) {

      // Bounce
      let dx = this.x - paddle.x;
      this.vx = this.vx + map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);

      this.vy = -this.vy;
      this.ay = 0;
    }
  }
  //add side borders
  border() {
    if (this.x < 0 || this.x > windowWidth) {
      // Bounce
      this.vx = -this.vx;
      this.ay = 0;
    }
  }

  display() {
    push();
    fill(255, 50, 50);
    stroke(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
class Paddle1 {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = width / 2;
    this.y = height - this.height / 2;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    this.x = constrain(this.x, 0 + this.width / 2, windowWidth - this.width / 2)
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 10);
    pop();
  }

}

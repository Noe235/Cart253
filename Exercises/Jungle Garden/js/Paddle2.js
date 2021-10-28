class Paddle2 {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = width / 2;
    this.y = 0 + this.height / 2;
  }

  move() {
    if (keyIsDown("65")) {
      this.x -= 5;
    } else if (keyIsDown("68")) {
      this.x += 5;
    }
    this.x = constrain(this.x, 0 + this.width / 2, windowWidth - this.width / 2)
  }


  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
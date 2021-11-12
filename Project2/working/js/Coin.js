class Coin {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.vx = 3;
    this.vy = 1;
    this.speed = speed;

    this.caught = false;

  }


  falling() {
    if (this.caught === false) {
      this.y += this.speed;
    } else {
      this.y = 1000
    }
  }

  display() {
    if (this.caught === false) {
      push()
      fill(140, 64, 214);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, 30); //20 is place holdre since there will be a image
      pop();

    }
  }




}
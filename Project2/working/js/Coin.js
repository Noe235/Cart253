class Coin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 3;
    this.vy = 1;
    this.speed = 1;

    this.caught = false;

  }

  if (this.caught === fasle) {
    falling() {
      this.y += this.vy;
    }

    display() {
      push()
      fill(140, 64, 214);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, 30); //20 is place holdre since there will be a image
      pop();

    }




  }
}
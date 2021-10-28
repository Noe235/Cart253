/**
Hockey
Noemie

*/

"use strict";

let gravityForce = 0.0025;

let paddle1;
let paddle2;

let balls = [];
let numBalls = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle1(width / 4, 20);
  paddle2 = new Paddle2(width / 4, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }
}

function draw() {
  background(0);

  paddle1.move();
  paddle1.display();

  paddle2.move();
  paddle2.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      // ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle1);
      ball.bounce(paddle2);
      ball.display();
    }

  }
}
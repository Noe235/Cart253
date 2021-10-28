/**
Hockey
Noemie

*/

"use strict";

let gamestate = `menu` //menu, playing, gover


let paddle1;
let paddle2;

let balls = [];
let numBalls = 10;
let ballstate = `yes`;
let score = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle1(width / 4, 20);
  paddle2 = new Paddle2(width / 4, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(1, height);
    let ball = new Ball(x, y);
    balls.push(ball);
  }
}

function draw() {
  if (gamestate === `menu`) {
    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(30)
    text(`Click to Start`, width / 2, height / 4);
    text(`2 players game, keep at least 1 ball alive`, width / 2, height / 3);
    text(`player 1 has the bottom paddle, controls arrow keys`, width / 2, height * 2.5 / 4);
    text(` player 2 has the top paddle, controls WASD `, width / 2, height * 2 / 3);


  }
  if (gamestate === `playing`) {
    background(0);
    timer();
    paddle1.move();
    paddle1.display();

    paddle2.move();
    paddle2.display();


    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];
      if (ball.active) {
        ball.move();
        ball.bounce(paddle1);
        ball.bounce(paddle2);
        ball.display();
        ball.border();

      }

    }
    gameover();
    if (ballstate === `no`) {
      gamestate = `gover`;

    }

  }
  console.log(ballstate);

  if (gamestate === `gover`) {
    gameoverscreen();
  }
}

function mousePressed() {
  if (gamestate === `menu`) {
    gamestate = `playing`;
  }
  if (gamestate === `gover`) {
    gamestate = `playing`
    score = 0;
    paddle1 = new Paddle1(width / 4, 20);
    paddle2 = new Paddle2(width / 4, 20);

    for (let i = 0; i < numBalls; i++) {
      let x = random(0, width);
      let y = random(10, height);
      let ball = new Ball(x, y);
      balls.push(ball);
    }

  }
}

function gameover() {
  for (let i = 0; i < balls.length; i++) {

    if (balls[i].y < height && balls[i].y > 0) {
      balls[i].alive = `yes`;

    } else {
      balls[i].alive = `no`;
    }
    ballstate = `no`;
    for (let i = 0; i < balls.length; i++) {
      if (balls[i].alive != `no`) {
        ballstate = `yes`;

      }
    }

  }

}

function gameoverscreen() {
  textAlign(CENTER);
  fill(255);
  textSize(30)
  text(`Play again?`, width / 2, height / 4);
  text(`Score ${score}`, width / 2, height * 2.5 / 4);
  text(`Click to Replay`, width / 2, height / 3);

}

function timer() {
  score++;
}
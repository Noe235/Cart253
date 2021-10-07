/**
love-actually
Noemie

*/

"use strict";



let bgnormal = 0
let bglove = 0
let gamestate = `topmenu`
let gacharate = 0.01
let menu = {
  x: 0,
  y: 0,
  alpha: 200,
  text: `Will you be lucky enough to find your one true love?`
}
let player = {
  x: 30,
  y: 450,
  size: 50,
  vx: 0.1,
  yx: 0.1,
  speed: 2
}

let friend = {
  x: 700,
  y: 400,
  size: 50,
  vx: 0.1,
  vy: 0.1,
  speed: 1
}
let love = {
  x: 500,
  y: 300,
  size: 40
}
/**
Description of preload
*/
function preload() {
  bgnormal = loadImage(`assets/images/greenlandscape.jpg`);
  bglove = loadImage(`assets/images/mountain.jpg`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(900, 500);
  background(23);

}

/**
Description of draw()
*/
function draw() {
  distanceCheck();
  bg();
  playerCommand();

  if (gamestate === `topmenu`) {
    topmenu();
  }
  if (gamestate === `end`) {
    gacharate = random(0, 1);
    endings();
  }
  if (gamestate === `1%`) {
    image(bglove, 0, 0, width, height);
    noStroke();
    fill(0);
    circle(player.x, player.y, player.size);
    //love?
    fill(255);
    circle(love.x, love.y, love.size);
    let d2 = dist(player.x, player.y, love.x, love.y)
    if (d2 < 40) {
      push();
      fill(0, menu.alpha);
      rectMode(CENTER);
      rect(width / 2, height / 2, 1000, 1000);
      pop();
      fill(255);
      textAlign(CENTER);
      textSize(70)
      text(`Congratulation, It's love`, 250, 200, 400, 300);
      noLoop();
    }

  }
  if (gamestate === `playing`) {
    //player
    noStroke();
    fill(0);
    circle(player.x, player.y, player.size);

    friendnpc();


  } else if (gamestate === `gameover`) {
    push();
    fill(0, menu.alpha);
    rectMode(CENTER);
    rect(width / 2, height / 2, 1000, 1000);
    pop();
    fill(255);
    textAlign(CENTER);
    textSize(70)
    text(`F,Game Over`, 250, 200, 400, 300);
    noLoop();
  }
  // //log for debug
  // // console.log(player.x, player.y)
  // console.log(friend.x, friend.y);
}

function bg() {
  image(bgnormal, 0, 0, width, height);
  //make it believable in mountain
  //top,bottom
  player.y = constrain(player.y, 330, 510);
  //left right
  player.x = constrain(player.x, -10, 910);
  //friend top,bottom
  friend.y = constrain(friend.y, 348, 800);

  //Gameover
  if (friend.x < -10) {
    gamestate = `gameover`
  }
  if (friend.x > 910) {
    gamestate = `gameover`
  }
  if (friend.y > height + 10) {
    gamestate = `gameover`
  }
}

function topmenu() {
  push();
  fill(0, menu.alpha);
  rectMode(CENTER);
  rect(width / 2, height / 2, 1000, 1000);
  pop();
  fill(255);
  textAlign(CENTER);
  textSize(70)
  text(`Catcha your love`, 250, 100, 400, 200);

  textSize(20);
  text(menu.text, 300, 300, 300, 200);

}

function distanceCheck() {
  let d1 = dist(player.x, player.y, friend.x, friend.y)
  if (d1 < 50) {
    gamestate = `end`
  }
  let d2 = dist(player.x, player.y, love.x, love.y)
  if (d2 < 40) {
    push();
    fill(0, menu.alpha);
    rectMode(CENTER);
    rect(width / 2, height / 2, 1000, 1000);
    pop();
    fill(255);
    textAlign(CENTER);
    textSize(70)
    text(`Congratulation, It's love`, 250, 200, 400, 300);
    noLoop();
  }
}

function mousePressed() {
  if (gamestate === `topmenu`) {
    clear
    let gacha = random(0, 1);
    if (gacha === 0.01) {
      gamestate = `1%`
    } else if (gacha > 0.01) {
      gamestate = `playing`

    }
  }
}

function friendnpc() {

  //npc
  fill(255)
  circle(friend.x, friend.y, friend.size);

  let change = random(0, 1);
  //chance %
  if (change < 0.10) {
    friend.vx = random(-friend.speed, friend.speed);
    friend.vy = random(-friend.speed, friend.speed);
  }

  friend.x = friend.x + friend.vx;
  friend.y = friend.y + friend.vy;


}

function endings() {
  if (gacharate === 0.01) {
    push();
    fill(0, menu.alpha);
    rectMode(CENTER);
    rect(width / 2, height / 2, 1000, 1000);
    pop();
    fill(255);
    textAlign(CENTER);
    textSize(70)
    text(`Congratulation, It's love`, 250, 200, 400, 300);
    noLoop();
  } else if (gacharate > 0.01 && gacharate < 0.20) {
    push();
    fill(0, menu.alpha);
    rectMode(CENTER);
    rect(width / 2, height / 2, 1000, 1000);
    pop();
    fill(255);
    textAlign(CENTER);
    textSize(70)
    text(`Friendship, Hopefully it lasts`, 250, 200, 400, 300);
    noLoop();
  } else {
    push();
    fill(0, menu.alpha);
    rectMode(CENTER);
    rect(width / 2, height / 2, 1000, 1000);
    pop();
    fill(255);
    textAlign(CENTER);
    textSize(60)
    text(`Just an acquaintance, better luck next time`, 250, 100, 400, 300);
    noLoop();
  }
}

function playerCommand() {
  //player command
  if (keyIsDown(LEFT_ARROW)) {
    player.vx = -player.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.vx = player.speed;
  } else {
    player.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    player.vy = -player.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    player.vy = player.speed;
  } else {
    player.vy = 0;
  }
  player.x = player.x + player.vx;
  player.y = player.y + player.vy;


}
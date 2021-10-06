/**
love-actually
Noemie

*/

"use strict";



let bgnormal = 0
let bglove = 0
let state = `default`

let player = {
  x: 30,
  y: 450,
  size: 50,
  vx: 0.1,
  yx: 0.1,
  speed: 2
}

let friend = {
  x: 500,
  y: 400,
  size: 50,
  vx: 0.1,
  vy: 0.1,
  speed: 1
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

  bg();

  //player
  noStroke();
  fill(0);
  circle(player.x, player.y, player.size);

  friendnpc();

  playerCommand();

  //log for debug
  // console.log(player.x, player.y)
  console.log(friend.x, friend.y)
}

function bg() {
  image(bgnormal, 0, 0, width, height);
  //make it believable in mountain
  //top,bottom
  player.y = constrain(player.y, 348, 510);
  //left right
  player.x = constrain(player.x, -10, 910);
  //friend top,bottom
  friend.y = constrain(friend.y, 348, 800);
}

function friendnpc() {



  //npc
  fill(235, 192, 23)
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
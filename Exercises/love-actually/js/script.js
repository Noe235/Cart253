/**
love-actually
Noemie

*/

"use strict";



let bgnormal = 0
let bglove = 0

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
  yx: 0.1,
  speed: 2
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
  image(bgnormal, 0, 0, width, height);

  //player
  noStroke();
  fill(0);
  circle(player.x, player.y, player.size);

  //npc
  fill(235, 192, 23)
  circle(friend.x, friend.y, friend.size);





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


  //log for debug
  console.log(player.x, player.y)
}
/**
Covid 19 dodging
Noemie

dodging activity
*/

"use strict";

//variables
let level = 1

let covid19 = {
  x: 0,
  y: 0,
  vx: 0.1

}

let player = {
  x: 450,
  y: 800
}
let bg = 64;

/**
Description of setup
*/
function setup() {
  createCanvas(900, 900);
  covid19.y = random(90, 650);
  covid19.vx = random(0.1, 10);
}


/**
Description of draw()
*/
function draw() {
  console.log(mouseDragged);

  background(bg);
  push();

  //initial circle/player
  fill(0, 0, 255);
  circle(player.x, player.y, 90);

  //moving player


  //covid19/enemmies
  pop()
  fill(255, 0, 0);
  covid19.x += covid19.vx;
  circle(covid19.x, covid19.y, 90);

  //bouncing rule
  if (covid19.x - 50 > width || covid19.x + 50 < 0) {
    covid19.vx = -covid19.vx;
  }
  // if (covid19.x < 0) {
  //   covid19.x += covid19.vx;
  // }




  //level next

  //counter

  //gameover

}
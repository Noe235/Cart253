/**
Covid 19 dodging
Noemie

dodging activity
*/

"use strict";

//variables
let level = 1
let bg = 64

let statics = {
  x: 0,
  y: 0,
  n: 1000
}
let covid19 = {
  x: 0,
  y: 0,
  vx: 0.1,
  d: 100

}

let player = {
  x: 450,
  y: 800,
  d: 100,
}


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
  console.log(covid19.d);
  push();
  background(bg);

  for (statics.n = 0; statics.n < 1000; statics.n++) {
    statics.x = random(0, width);
    statics.y = random(0, height);
    stroke("white");
    point(statics.x, statics.y);
  }


  //initial circle/player
  pop()
  fill(0, 0, 255);
  circle(player.x, player.y, 90);


  //constrain of player


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
  covid19.d = dist(player.x, player.y, covid19.x, covid19.y)
  if (covid19.d < 90)
    noLoop()

}

//player mouvement
function mouseDragged() {
  player.d = dist(player.x, player.y, mouseX, mouseY)
  if (player.d < 45) {
    player.x = mouseX;
    player.y = mouseY;
  }
}
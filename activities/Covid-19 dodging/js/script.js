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
  vy: 0.2,
  d: 100,

}
let covid219 = {
  x: 100,
  y: 500,
  vx: 0.1,
  vy: 0.2,
  d: 100,
}
let covid319 = {
  x: 500,
  y: 700,
  vx: 0.3,
  vy: 0.2,
  d: 100,

}

let player = {
  x: 450,
  y: 800,
  d: 100,
}


/**
get all the ramdon of only one time ready
*/
function setup() {
  createCanvas(900, 900);
  covid19.y = random(90, 650);
  covid19.vx = random(0.1, 10);
  covid19.vy = random(0.1, 10);
  covid219.y = random(90, 650);
  covid219.vx = random(0.1, 10);
  covid219.vy = random(0.1, 10);
  covid319.y = random(90, 650);
  covid319.vx = random(0.1, 10);
  covid319.vy = random(0.1, 10);
}



/**
Covid,player,bg,static, rules
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
  circle(player.x, player.y, 70);


  //constrain of player
  player.x = constrain(player.x, 0, width);
  player.y = constrain(player.y, 0, height);

  //covid19/enemmies
  pop()
  fill(255, 0, 0);
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;
  covid19.nf = random(1, 10);
  circle(covid19.x, covid19.y, 90);
  //bouncing rule
  if (covid19.x - 50 > width || covid19.x + 50 < 0) {
    covid19.vx = -covid19.vx;

  }
  if (covid19.y > height || covid19.y < 0) {
    covid19.vy = -covid19.vy;
  }

  //covid219
  covid219.x += covid219.vx;
  covid219.y += covid219.vy;
  circle(covid219.x, covid219.y, 90);

  //bouncing rule
  if (covid219.x - 50 > width || covid219.x + 50 < 0) {
    covid219.vx = -covid219.vx;

  }
  if (covid219.y > height || covid219.y < 0) {
    covid219.vy = -covid219.vy;

  }

  //covid319
  covid319.x += covid319.vx;
  covid319.y += covid319.vy;
  circle(covid319.x, covid319.y, 90);

  //bouncing rule
  if (covid319.x - 50 > width || covid319.x + 50 < 0) {
    covid319.vx = -covid319.vx;

  }
  if (covid319.y > height || covid319.y < 0) {
    covid319.vy = -covid319.vy;

  }




  //gameover
  covid19.d = dist(player.x, player.y, covid19.x, covid19.y)
  if (covid19.d < 75) {
    noLoop()
  }
  covid219.d = dist(player.x, player.y, covid219.x, covid219.y)
  if (covid219.d < 75) {
    noLoop()
  }

  covid319.d = dist(player.x, player.y, covid319.x, covid319.y)
  if (covid319.d < 75) {
    noLoop()
  }



}

//player mouvement
function mouseDragged() {
  player.d = dist(player.x, player.y, mouseX, mouseY)
  if (player.d < 45) {
    player.x = mouseX;
    player.y = mouseY;
  }
}
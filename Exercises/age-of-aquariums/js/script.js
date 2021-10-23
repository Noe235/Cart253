"use strict";

/**************************************************
fishies catch
noemie
**************************************************/
let gamestate = `playing` //playing or pause
let gameoverlay = `no` //no or gover
let fish = []
let school = 5

let lilypad = []
let plants = 5

let fishcapture = 0
let fishstate = `alive` //alive or caught
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  plants = random(5, 10)
  school = random(5, 20)
  //create teh parameters of the fishies
  for (let i = 0; i < school; i++) {
    fish[i] = createFish(random(0, width), random(0, height), random(20, 50), random(1, 2.5));
  }

  //create the place of  the lilypads
  for (let i = 0; i < plants; i++) {
    lilypad[i] = createLilypad(random(0, width), random(0, height), random(10, 200));
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  if (gamestate === `playing`) {
    background(149, 200, 216);


    for (let i = 0; i < fish.length; i++) {
      moveFish(fish[i]);
    }
    for (let i = 0; i < fish.length; i++) {
      displayFish(fish[i]);
    }


    for (let i = 0; i < lilypad.length; i++) {
      displayEnviroment(lilypad[i]);
    }

    user();

    fishing();

  }
  checkfishleft();
  gameover();
}

function createFish(x, y, size, speed) {
  let fish = {
    x: x,
    y: y,
    size: size,
    vx: 0,
    vy: 0,
    speed: speed,
    caught: false,
  }
  return fish;
}

function displayFish(fish) {
  if (!fish.caught) {
    noStroke();
    fill(126, 78, 172);
    circle(fish.x, fish.y, fish.size);
  }
}

function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
  //  move the fish
  fish.x += fish.vx;
  fish.y += fish.vy;

  //constrain the fish to the canvas
  fish.x = constrain(fish.x, 30, width);
  fish.y = constrain(fish.y, 30, height);
}

function createLilypad(x, y, size) {
  let lilypad = {
    x: x,
    y: y,
    size: size,
  }
  return lilypad;
}


function displayEnviroment(lilypad) {
  noStroke();
  fill(37, 142, 112);
  circle(lilypad.x, lilypad.y, lilypad.size);
}

function user() {
  fill(255, 0, 0);
  circle(mouseX, mouseY, 30);
  fill(255);
  circle(mouseX, mouseY, 20);
}

function fishing() {
  for (let i = 0; i < fish.length; i++) {
    let d = dist(mouseX, mouseY, fish[i].x, fish[i].y);
    if (d < 15 + (fish[i].size / 2)) {
      fish[i].caught = true
      fishcapture += 1;
      fish[i].state = `caught`;
    }
  }
}

function checkfishleft() {
  fishstate = 'caught';
  for (let i = 0; i < fish.length; i++) {
    if (fish[i].state != `caught`) {
      fishstate = `alive`;
    }
  }
}

function gameover() {
  if (fishstate === `caught`) {
    gamestate = `pause`
  }
  if (frameCount > 1800) {
    gamestate = `pause`
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //re put the lily pads
  for (let i = 0; i < plants; i++) {
    lilypad[i] = createLilypad(random(0, width), random(0, height), random(10, 200));
  }
}
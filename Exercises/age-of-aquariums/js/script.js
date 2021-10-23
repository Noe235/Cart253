"use strict";

/**************************************************
fishies catch
noemie
**************************************************/
let fish = []
let school = 5

let lilypads = []
let plants = 5


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  //crete the place of the fishies
  for (let i = 0; i < school; i++) {
    fish[i] = createFish(random(0, width), random(0, height));
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(149, 200, 216);
  enviroment();

}

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 2,
    vx: 0,
    vy: 0,
    speed: 1,
  }
  return fish;
}

function moveFish() {

}

function enviroment() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
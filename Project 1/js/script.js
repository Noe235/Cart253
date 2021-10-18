"use strict";

/**************************************************
sheep
Noemie

sheep game where you regroup the Sheep
**************************************************/

let gamescreen = `menu`; //(menu, game)
let gamestate = `playing`; //(playing, pause)
let gamepause = `npause`; //(npause, option)
let menuImage = `assets/images/Menu/menuImage.jpg`;

let button = [];

function preload() {
  menuImage = loadImage(`assets/images/Menu/menuImage.jpg`);

}
// setup()
//#258E70
// Description of setup() goes here.
function setup() {
  createCanvas(1100, 800);
  background(51);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  if (gamescreen === `menu`) {
    image(menuImage, 0, 0, width, height);

  }
}


function menu() {


}
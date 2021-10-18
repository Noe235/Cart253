"use strict";

/**************************************************
sheep
Noemie

sheep game where you regroup the Sheep
**************************************************/

let gamescreen = `menu`; //(menu, game)
let gamestate = `playing`; //(playing, pause,)
let gamepause = `npause`; //(pause, option,cedit)
let gameoverlay = `no` //(no, gpause,option,credit)
let menuImage = `assets/images/Menu/menuImage.jpg`;

// let buttonPlay(){
//   x:
//   y:
//   sizex:
//   sizey:
//
// }
function preload() {
  menuImage = loadImage(`assets/images/Menu/menuImage.jpg`);

}
// setup()
//#258E70
// Description of setup() goes here.
function setup() {
  createCanvas(1100, 800);
  background(51);
  if (gamescreen === `menu`) {
    menu();

  }
}

// draw()
//
// Description of draw() goes here.
function draw() {


  if (gamescreen === `game`) {
    clear();
    text(`insert game here`, width / 2, height / 2);


  }


  console.log(mouseX, mouseY)
}

function menu() {
  image(menuImage, 0, 0, width, height);
  button();

  //Menu text
  textSize(51);
  textAlign(CENTER);
  fill(255);
  text(`Play`, width / 2, 285);
  text(`Options`, width / 2, 420);
  text(`Credit`, width / 2, 550);



}

function button() {
  rectMode(CENTER);
  noStroke();
  fill(37, 142, 112); //pomu color
  rect(width / 2, height / 3, 400, 70);
  rect(width / 2, height / 2, 400, 70);
  rect(width / 2, height * 2 / 3, 400, 70);

}

function mousePressed() {
  if (gamestate === `playing`) {
    if (gamescreen === `menu`)
      //play game
      if ((mouseX > 550 - 200) && (mouseX < 550 + 200) &&
        (mouseY > 266 - 35) && (mouseY < 266 + 35)) {
        gamescreen = `game`

      }
    //option screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 400 - 35) && (mouseY < 400 + 35)) {
      fill(0, 0, 0, 170)
      rect(width / 2, height / 2, 900, 500, 20);
      noStroke();
      fill(37, 142, 112); //X buton
      rect(950, 200, 50, 50, 5);
      textSize(51);
      textAlign(CENTER);
      fill(255);
      text(`X`, 950, 220);
      gamestate = `pause`;
      gameoverlay = `option`;

    }
    //cedit screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
      fill(0, 0, 0, 170)
      rect(width / 2, height / 2, 900, 500, 20);
      noStroke();
      fill(37, 142, 112); //X button
      rect(950, 200, 50, 50, 5);
      textSize(51);
      textAlign(CENTER);
      fill(255);
      text(`X`, 950, 220);
      gamestate = `pause`;
      gameoverlay = `cedit`;

    }
  }
  //interaction of overlay
  if (gamestate === `pause`) {
    if ((mouseX > 950 - 25) && (mouseX < 950 + 25) &&
      (mouseY > 200 - 25) && (mouseY < 200 + 25)) {
      menu();
      gamestate = `playing`;
    }


  }

}
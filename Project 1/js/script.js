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
let mVolume;
let musiccolor = 100;


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
  clear();
  image(menuImage, 0, 0, width, height);
  button();

  //Menu text
  textSize(51);
  textAlign(CENTER);
  fill(255);
  text(`Play`, width / 2, 285);
  text(`Options`, width / 2, 420);
  text(`Credit`, width / 2, 550);
  if (mVolume < 0) {
    mVolume.hide();
  }



}

function button() {
  rectMode(CENTER);
  noStroke();
  fill(37, 142, 112); //pomu color
  rect(width / 2, height / 3, 400, 70);
  rect(width / 2, height / 2, 400, 70);
  rect(width / 2, height * 2 / 3, 400, 70);

}

function credit() {
  gamestate = `pause`;
  gameoverlay = `credit`;
  //window
  fill(0, 0, 0, 170)
  rect(width / 2, height / 2, 900, 500, 20);
  //close button
  noStroke();
  fill(37, 142, 112); //X button
  rect(950, 200, 50, 50, 5);
  textSize(51);
  textAlign(CENTER);
  fill(255);
  text(`X`, 950, 220);

  //cedit text
  textAlign(LEFT);
  textSize(20)
  text(`insert text here`, 150, 300);
  text(`insert text here`, 150, 350);
  text(`insert text here`, 150, 400);
  text(`insert text here`, 150, 450);
  text(`insert text here`, 150, 500);
  text(`insert text here`, 150, 550);
  text(`insert text here`, 150, 600);

}

function option() {
  gamestate = `pause`;
  gameoverlay = `option`;
  //window
  fill(0, 0, 0, 170)
  rect(width / 2, height / 2, 900, 500, 20);
  //close button
  noStroke();
  fill(37, 142, 112); //X buton
  rect(950, 200, 50, 50, 5);
  textSize(51);
  textAlign(CENTER);
  fill(255);
  text(`X`, 950, 220);

  //music selector

  push();
  fill(149, 200, 216, musiccolor);

  //track 1
  rect(220, 350, 190, 310, 20);
  fill(149, 200, 216, 120);
  circle(217, 470, 60);
  push();
  fill(255);
  triangle(210, 450,
    235, 470,
    210, 490);
  pop();

  push();
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 135, 420);
  pop();

  //track 2
  rect(420, 350, 190, 310, 20);
  fill(149, 200, 216, 120);
  circle(417, 470, 60);
  push();
  fill(255);
  triangle(410, 450,
    435, 470,
    410, 490);
  pop();
  push();
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 335, 420);
  pop();
  //track 3
  rect(620, 350, 190, 310, 20);
  fill(149, 200, 216, 120);
  circle(617, 470, 60);
  push();
  fill(255);
  triangle(610, 450,
    635, 470,
    610, 490);
  pop();
  push();
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 535, 420);
  pop();
  //track 4
  rect(820, 350, 190, 310, 20);
  fill(149, 200, 216, 120);
  circle(817, 470, 60);
  push();
  fill(255);
  triangle(810, 450,
    835, 470,
    810, 490);
  pop();
  push();
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 735, 420);
  pop();
  pop();
  //music sound adjusment

  textAlign(LEFT);
  textSize(40);
  text(`Volume`, 150, 550);
  mVolume = createSlider(0, 5, 10, 0);
  mVolume.position(150, 650);
  mVolume.style(`width`, `800px`);




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
      option();
    }
    //cedit screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
      credit();
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
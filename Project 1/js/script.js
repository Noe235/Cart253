"use strict";

/**************************************************
sheep
Noemie

sheep game where you regroup the Sheep
**************************************************/
//game state
let gamescreen = `menu`; //(menu, game)
let gamestate = `playing`; //(playing, pause,)
let gamepause = `npause`; //(pause, option,cedit)
let gameoverlay = `no` //(no, gpause,option,credit)
let menuImage = `assets/images/Menu/menuImage.jpg`;


//music
let mVolume = 0.5; //slider for volume
let musicPlaying = `false`;
let musiccolor = 10;
let track = `1`; //number adds a red dot
let track1 = `assets/sounds/Trial and Error.mp3`;
let track2 = `assets/sounds/bark.wav`;



//distances
let d1 = 50;
let d2 = 50;
let d3 = 50;
let d4 = 50;

//arrays looping
// let atrackrectx= [220,420,620,820];

//buttons
let mbutton1;
let mbutton2;
let mbutton3;

function preload() {

  menuImage = loadImage(`assets/images/Menu/menuImage.jpg`);
  track1 = loadSound(`assets/sounds/Trial and Error.mp3`);
  track2 = loadSound(`assets/sounds/bark.wav`);
}
// setup()
//#258E70
// Only canvas + random generator
function setup() {
  createCanvas(1100, 800);
  //button menu
  mbutton1 = menubutton(height / 3);
  mbutton2 = menubutton(height / 2);
  mbutton3 = menubutton(height * 2 / 3);

  //more stuff go give numbers to

}
// draw()
//
// Description of draw() goes here.
function draw() {
  if (gamescreen === `menu`) {
    if (gameoverlay === `no`) {
      menu();
    }

  }


  //start game
  if (gamescreen === `game`) {
    clear();
    text(`insert game here`, width / 2, height / 2);


  }

  if (gameoverlay === `option`) {
    musicChecker();
    option();


  }
  if (gameoverlay === `credit`) {
    credit();
  }





}

function menu() {
  clear();
  image(menuImage, 0, 0, width, height);


  //buttons
  displayMButton(mbutton1);
  displayMButton(mbutton2);
  displayMButton(mbutton3);

  //Menu text
  textSize(51);
  textAlign(CENTER);
  fill(255);
  text(`Play`, width / 2, 285);
  text(`Options`, width / 2, 420);
  text(`Credit`, width / 2, 550);


}
//sets the buttons var
function menubutton(y) {
  let mbutton = {
    x: width / 2,
    y: y,
    lenght: 400,
    height: 70
  };
  return mbutton;
}

function displayMButton(mbutton) {
  rectMode(CENTER);
  noStroke();
  fill(37, 142, 112); //pomu color
  rect(mbutton.x, mbutton.y, mbutton.lenght, mbutton.height);
}

function option() {
  gamestate = `pause`;
  //window
  fill(0, 0, 0, 70)
  rect(width / 2, height / 2, 900, 500, 20);
  //close button
  noStroke();
  fill(37, 142, 112); //X buton
  rect(950, 200, 50, 50, 5);
  textSize(51);
  textAlign(CENTER);
  fill(255);
  text(`X`, 950, 220);

  let tdisplay = {
    rectx: 220,
    circx: 217,
    trianx1: 210,
    trianx2: 235
  }

  for (let rt = 0; rt < 4; rt++) {
    fill(149, 200, 216, 100);
    rect(tdisplay.rectx, 350, 190, 310, 20);
    tdisplay.rectx += 200;
    fill(149, 200, 216, 120);
    circle(tdisplay.circx, 470, 60);
    tdisplay.circx += 200;
    fill(255);
    triangle(tdisplay.trianx1, 450,
      tdisplay.trianx2, 470,
      tdisplay.trianx1, 490);
    tdisplay.trianx1 += 200;
    tdisplay.trianx2 += 200;
  }
  // //track 1
  // fill(149, 200, 216, 100);
  // rect(220, 350, 190, 310, 20);
  // fill(149, 200, 216, 120);
  // circle(217, 470, 60);
  //
  // fill(255);
  // triangle(210, 450,
  //   235, 470,
  //   210, 490);
  //
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 135, 420);


  // //track 2
  // fill(149, 200, 216, 100);
  // rect(420, 350, 190, 310, 20);
  // fill(149, 200, 216, 120);
  // circle(417, 470, 60);
  //
  // fill(255);
  // triangle(410, 450,
  //   435, 470,
  //   410, 490);

  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 335, 420);


  // //track 3
  // fill(149, 200, 216, 100);
  // rect(620, 350, 190, 310, 20);
  // fill(149, 200, 216, 120);
  // circle(617, 470, 60);
  //
  // fill(255);
  // triangle(610, 450,
  //   635, 470,
  //   610, 490);

  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 535, 420);


  // //track 4
  // fill(149, 200, 216, 100);
  // rect(820, 350, 190, 310, 20);
  // fill(149, 200, 216, 120);
  // circle(817, 470, 60);
  //
  // fill(255);
  // triangle(810, 450,
  //   835, 470,
  //   810, 490);

  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`insert music name here`, 735, 420);


  //Volume
  fill(255);
  textAlign(LEFT);
  textSize(40);
  text(`Volume`, 150, 550);

  // setting volume
  track1.setVolume(mVolume.value());

}

function musicPlayer() {

  // if (musicPlaying === `false`) {
  //   track1.play()
  //   musicPlaying = `true`;
  // }
  if (!track1.isPlaying()) {
    //   track1.stop();
    // } else {
    track1.loop();

  }
}

function credit() {
  gamestate = `pause`;
  //window
  fill(0, 0, 0, 70)
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
  text(`Menu background by brgfx -www.freepik.com`, 150, 300);
  text(`insert text here`, 150, 350);
  text(`insert text here`, 150, 400);
  text(`insert text here`, 150, 450);
  text(`insert text here`, 150, 500);
  text(`insert text here`, 150, 550);
  text(`insert text here`, 150, 600);

}

function musicChecker() {
  d1 = dist(mouseX, mouseY, 217, 470);
  d2 = dist(mouseX, mouseY, 417, 470);
  d3 = dist(mouseX, mouseY, 617, 470);
  d4 = dist(mouseX, mouseY, 817, 470);

  if (track === `1`) {

    fill(255, 0, 0);
    circle(270, 450, 20);
    musicPlayer();

  } else if (track === `2`) {

    fill(255, 0, 0);
    circle(470, 450, 20);

  } else if (track === `3`) {

    fill(255, 0, 0);
    circle(670, 450, 20);

  } else if (track === `4`) {

    fill(255, 0, 0);
    circle(870, 450, 20);

  }
}

function musicSelector() {
  if (d1 < 30) {
    track = `1`;
    // musicPlayer();
  }
  if (d2 < 30) {
    track = `2`;
  }
  if (d3 < 30) {
    track = `3`;
  }
  if (d4 < 30) {
    track = `4`;
  }

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
      gameoverlay = `option`
      //music sound adjusment

      mVolume = createSlider(0, 1, 0.2, 0.01);
      mVolume.position(150, 650);
      mVolume.style(`width`, `800px`);

    }
    //cedit screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
      gameoverlay = `credit`;
    }
  }
  //interaction of overlay
  //close button
  if (gamestate === `pause`) {
    if ((mouseX > 950 - 25) && (mouseX < 950 + 25) &&
      (mouseY > 200 - 25) && (mouseY < 200 + 25)) {
      menu();
      gamestate = `playing`;
      gameoverlay = `no`;
      mVolume.hide();
      console.log(`e`)

    }

    // music selector
    if (gameoverlay === `option`) {
      musicSelector();


    }
  }

}
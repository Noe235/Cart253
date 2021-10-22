"use strict";

/**************************************************
sheep
Noemie

sheep game where you regroup the Sheep
**************************************************/
//game state
let gamescreen = `menu`; //(menu, game)

//in the function
let gamestate = `playing`; //(playing, pause,)

//in the draw function+interaction
let gameoverlay = `no` //(no, gover,goption,option,credit)

//assets
let menuImage = `assets/images/Menu/menuImage.jpg`;
let dragoonImage = `assets/images/game/dragoon.png`;
let dragooneggImage = `assets/images/game/dragoon_egg.png`;

//music
let mVolume = 0.5; //slider for volume
let musicPlaying = `false`;
let musiccolor = 10;
let track = `1`; //number adds a red dot
let track1 = `assets/sounds/雨上がりの午後.mp3`; //selen outro bgm
let track2 = `assets/sounds/やさしいじかん.mp3`; //elira bgm
let track3 = `assets/sounds/忘れた記憶.mp3`; //selen bgm
let track4 = `assets/sounds/Accumula Town.mp3`; //furret walk


//distances
//music
let d1 = 50;
let d2 = 50;
let d3 = 50;
let d4 = 50;

//game
let dragoons = [];
let dragoonstate = `out`; //in or out of the pen
let flock = 1;
let dragooneggs = [];
let dragooneggstate = `out`; //in or out of the pen
let eggs = 1;

//buttons
let mbutton1;
let mbutton2;
let mbutton3;

function preload() {
  //image preload
  menuImage = loadImage(`assets/images/Menu/menuImage.jpg`);
  dragoonImage = loadImage(`assets/images/game/dragoon.png`);
  dragooneggImage = loadImage(`assets/images/game/dragoon_egg.png`);

  //track preload
  track1 = loadSound(`assets/sounds/雨上がりの午後.mp3`); //selen outro bgm
  track2 = loadSound(`assets/sounds/やさしいじかん.mp3`); //elira bgm
  track3 = loadSound(`assets/sounds/忘れた記憶.mp3`); //selen bgm
  track4 = loadSound(`assets/sounds/Accumula Town.mp3`); //furret walk

}
// setup()
// Only canvas + random generator
function setup() {
  createCanvas(1100, 800);
  //button menu
  mbutton1 = menubutton(height / 3);
  mbutton2 = menubutton(height / 2);
  mbutton3 = menubutton(height * 2 / 3);

  //random number of dragoon on the scrren
  flock = random(1, 10);
  eggs = random(1, 10);

  //making dragoons gving them position
  for (let i = 0; i < flock; i++) {
    dragoons[i] = createDragoons(random(20, width), random(20, height));
  }
  for (let i = 0; i < eggs; i++) {
    dragooneggs[i] = createDragooneggs(random(20, width), random(20, height));
  }
  mVolume = createSlider(0, 0.3, 0.07, 0.001);
  // mVolume.position(150, 650);
  mVolume.style(`width`, `800px`);

}
// draw()
//
// Description of draw() goes here.
function draw() {
  //adjust volume all the time
  adjVolume();

  if (gamescreen === `menu`) {
    if (gameoverlay === `no`) {
      menu();
    }
  }
  //start game
  if (gamestate === `playing`) {
    if (gamescreen === `game`) {
      // game runining (will check all the distance and the runing stuff)
      //game set-up
      gameRuning();
      gamePieces();
      checkDist();
      gameover();
    }
  }
  if (gameoverlay === `option`) {
    musicChecker();
    option();


  }
  if (gameoverlay === `credit`) {
    credit();
  }

  if (gameoverlay === `gover`) {
    //window
    fill(0, 0, 0, 70)
    rect(width / 2, height / 2, 900, 500, 20);

    //buttons
    displayMButton(mbutton1);
    displayMButton(mbutton2);

    //gover text
    textSize(51);
    textAlign(CENTER);
    fill(255);
    text(`Replay`, width / 2, 285);
    text(`Options`, width / 2, 420);
    textSize(25);
    text(`Good job on gathering all the Dragoons and the Hatchling!`, width / 2, 550);

  }
}

function adjVolume() {
  // setting volume
  track1.setVolume(mVolume.value());
  track2.setVolume(mVolume.value());
  track3.setVolume(mVolume.value());
  track4.setVolume(mVolume.value());
}

function gameRuning() {
  background(71, 179, 57);

  //pen
  // fill(255);
  // rect(200, 400, 130, 130);
  stroke(89, 66, 51);
  strokeWeight(4);
  fill(89, 66, 51);
  line(135, 335,
    265, 335);
  line(135, 335,
    135, 465);
  line(135, 465,
    265, 465);

  //pause button
  noStroke();
  fill(37, 142, 112); //X buton
  rect(1050, 50, 50, 50, 5);
  textSize(35);
  textAlign(CENTER);
  fill(255);
  text(`||`, 1050, 60);
  //intructions
  textAlign(LEFT);
  textSize(25)
  text(`Bring all the Dragoons and Hatchling in the pen with your mouse`, 10, 30);
}

function checkDist() {
  //check the distance for mouse movement
  //for the dragoons
  for (let i = 0; i < dragoons.length; i++) {
    let dis = dist(mouseX, mouseY, dragoons[i].x, dragoons[i].y)

    if (dis < 20) {
      if (mouseX > dragoons[i].x) { //mouse is on the right
        dragoons[i].x -= 10
      }
      if (mouseX < dragoons[i].x) { //mouse on the left
        dragoons[i].x += 10
      }
      if (mouseY > dragoons[i].y) { //mouse is below
        dragoons[i].y -= 10
      }
      if (mouseY < dragoons[i].y) { //mousse is above
        dragoons[i].y += 10
      }
    }
  }
  // for the eggs
  for (let i = 0; i < dragooneggs.length; i++) {
    let disegg = dist(mouseX, mouseY, dragooneggs[i].x, dragooneggs[i].y)

    if (disegg < 17) {
      if (mouseX > dragooneggs[i].x) { //mouse is on the right
        dragooneggs[i].x -= 10
      }
      if (mouseX < dragooneggs[i].x) { //mouse on the left
        dragooneggs[i].x += 10
      }
      if (mouseY > dragooneggs[i].y) { //mouse is below
        dragooneggs[i].y -= 10
      }
      if (mouseY < dragooneggs[i].y) { //mousse is above
        dragooneggs[i].y += 10
      }
    }
  }
}

function gamePieces() {
  for (let i = 0; i < dragoons.length; i++) {
    displayDragoons(dragoons[i]);
  }

  for (let i = 0; i < dragooneggs.length; i++) {
    displayDragooneggs(dragooneggs[i]);
  }
  for (let i = 0; i < dragooneggs.length; i++) {
    moveDragooneggs(dragooneggs[i]);
  }

}

function createDragoons(x, y) {
  let dragoons = {
    x: x,
    y: y,
    size: 25,
    height: 45,
    length: 45,
    state: `out`,
  }
  return dragoons;
}

function displayDragoons(dragoons) {
  push();
  // noStroke();
  // fill(126, 78, 172);
  // circle(dragoons.x, dragoons.y, dragoons.size);
  imageMode(CENTER);
  image(dragoonImage, dragoons.x, dragoons.y, dragoons.height, dragoons.length);
  pop();
  //constrain the dragoons to the canvas
  dragoons.x = constrain(dragoons.x, 30, width - 30);
  dragoons.y = constrain(dragoons.y, 30, height - 30);


}

function createDragooneggs(x, y) {
  let dragooneggs = {
    x: x,
    y: y,
    size: 35,
    height: 25,
    length: 35,
    vx: 0,
    vy: 0,
    speed: 0.3,
    state: `out`,
  }
  return dragooneggs;
}

function displayDragooneggs(dragooneggs) {
  push();
  // noStroke();
  // fill(255);
  //circle(dragooneggs.x, dragooneggs.y, dragooneggs.size);
  imageMode(CENTER);
  image(dragooneggImage, dragooneggs.x, dragooneggs.y, dragooneggs.height, dragooneggs.length);
  pop();


}

function moveDragooneggs(dragooneggs) {
  //movement of the eggs
  let change = random(0, 1);
  if (change < 0.05) {
    dragooneggs.vx = random(-dragooneggs.speed, dragooneggs.speed);
    dragooneggs.vy = random(-dragooneggs.speed, dragooneggs.speed);
  }
  //  move the egg
  dragooneggs.x += dragooneggs.vx;
  dragooneggs.y += dragooneggs.vy;

  //constrain the eggs to the canvas
  dragooneggs.x = constrain(dragooneggs.x, 30, width - 30);
  dragooneggs.y = constrain(dragooneggs.y, 30, height - 30);

}

function gameover() {
  //check if the dragoons are inside the pen
  for (let i = 0; i < dragoons.length; i++) {
    if ((dragoons[i].x > 200 - 55) &&
      (dragoons[i].x < 200 + 55) &&
      (dragoons[i].y > 400 - 55) &&
      (dragoons[i].y < 400 + 55)) {
      dragoons[i].state = `in`;
    }

  }
  //check if the eggs are inside the pen
  for (let i = 0; i < dragooneggs.length; i++) {
    if ((dragooneggs[i].x > 200 - 45) &&
      (dragooneggs[i].x < 200 + 45) &&
      (dragooneggs[i].y > 400 - 45) &&
      (dragooneggs[i].y < 400 + 45)) {
      dragooneggs[i].state = `in`;
    }
  }
  dragoonstate = 'in';

  for (let i = 0; i < dragoons.length; i++) {
    if (dragoons[i].state != `in`) {
      dragoonstate = `out`;
    }

  }
  dragooneggstate = 'in';
  for (let i = 0; i < dragooneggs.length; i++) {
    if (dragooneggs[i].state != `in`) {
      dragooneggstate = `out`;
    }
  }
  if ((dragoonstate === `in`) && (dragooneggstate === `in`)) {
    gamestate = `pause`
    gameoverlay = `gover`
  }

}

function menu() {
  clear();
  //bg
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
  textSize(20);
  textAlign(LEFT);
  text(`Press Options to choose a BGM`, 0, 795);


}

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
  windowOption();
  //track loop
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
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`Afternoon after rain`, 135, 420); //Selen outro
  // //track 2
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`Easy Time`, 365, 420); //elira BGM
  // //track 3
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`Forgotten Memories`, 535, 420); //selen BGM
  // //track 4
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`Accumula Town`, 755, 420); //Furret walk

  //Volume
  fill(255);
  textAlign(LEFT);
  textSize(40);
  text(`Volume`, 350, 795);
}

function windowOption() {
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

}

function musicPlayer() {
  //stop all track and loop teh corresponding
  if (track === `1`)
    if (!track1.isPlaying()) {
      track1.stop()
      track2.stop()
      track3.stop()
      track4.stop()
      track1.loop();
    }
}

function playtrack2() {
  if (track === `2`) {
    if (!track2.isPlaying()) {
      track1.stop()
      track2.stop()
      track3.stop()
      track4.stop()
      track2.loop();
    }
  }
}

function playtrack3() {
  if (track === `3`) {
    if (!track3.isPlaying()) {
      track1.stop()
      track2.stop()
      track3.stop()
      track4.stop()
      track3.loop();
    }
  }
}

function playtrack4() {
  if (track === `4`) {
    if (!track4.isPlaying()) {
      track1.stop()
      track2.stop()
      track3.stop()
      track4.stop()
      track4.loop();
    }
  }
}

function credit() {
  gamestate = `pause`;
  windowOption();
  //cedit text
  textAlign(LEFT);
  textSize(20)
  text(`Menu background by brgfx -www.freepik.com`, 150, 300);
  text(`dragoons by Selen Tatsuki -https://twitter.com/selen_tatsuki/status/1432534022308212750`, 150, 350);
  text(`dragoons egg by Selen Tatsuki -https://twitter.com/selen_tatsuki/status/1432534022308212750`, 150, 400);
  text(`Afternoon after rain -https://dova-s.jp/`, 150, 450);
  text(`Easy time -https://dova-s.jp/`, 150, 500);
  text(`Forgotten Memories -https://dova-s.jp/`, 150, 550);
  text(`Accumula Town by Zame -https://www.youtube.com/watch?v=eAqFZaGnxoI`, 150, 600);

}

function musicChecker() {
  //check the play buttons
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
    playtrack2();

  } else if (track === `3`) {

    fill(255, 0, 0);
    circle(670, 450, 20);
    playtrack3();

  } else if (track === `4`) {

    fill(255, 0, 0);
    circle(870, 450, 20);
    playtrack4();

  }
}

function musicSelector() {
  //change the tracks
  if (d1 < 30) {
    track = `1`;
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
  //overlay not on
  if (gamestate === `playing`) {
    //pause button in game screen
    if (gamescreen === `game`) {
      // rect(1050, 50, 50, 50, 5);
      if ((mouseX > 1050 - 50) && (mouseX < 1050 + 50) &&
        (mouseY > 50 - 50) && (mouseY < 50 + 50)) {
        gameoverlay = `option`
      }
    }

    //interaction of the menu
    if (gamescreen === `menu`) {
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

        // mVolume = createSlider(0, 1, 0.1, 0.01);
        // // mVolume.position(150, 650);
        // mVolume.style(`width`, `800px`);

      }
      //cedit screen
      if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
        (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
        gameoverlay = `credit`;
      }
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
      // mVolume.hide();

    }

    // music selector
    if (gameoverlay === `option`) {
      musicSelector();


    }
  }
  //gameover screen
  if (gameoverlay === `gover`) {
    //replay screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 200) &&
      (mouseY > 266 - 35) && (mouseY < 266 + 35)) {
      gamescreen = `menu`;
      gameoverlay = `no`;
      gamestate = `playing`;
      //making dragoons gving them position
      for (let i = 0; i < flock; i++) {
        dragoons[i] = createDragoons(random(20, width), random(20, height));
      }
      for (let i = 0; i < eggs; i++) {
        dragooneggs[i] = createDragooneggs(random(20, width), random(20, height));
      }
    }

    //option screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 400 - 35) && (mouseY < 400 + 35)) {
      gameoverlay = `option`
    }
  }
}
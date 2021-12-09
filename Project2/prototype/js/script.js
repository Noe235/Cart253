"use strict";

/**************************************************
Niji Mini-Game
Noemie


**************************************************/
//game state
let gamescreen = `menu`; //(nameing the game after the people
// menu,
// lobby
// selen
//
//
// )

//in the function
let gamestate = `playing`; //(playing, pause, lobby)

//in the draw function+interaction
let gameoverlay = `no` //(no, gover,goption,option,credit)

//assets
let menuImage = `assets/images/Menu/menuImage.jpg`;
let lobbyImage = `assets/images/game/lobby.jpg`;
let selenchibi = 'assets/images/Menu/chibiselen.png';

// lobby
let ufo = 'assets/images/Menu/ufo.png';
let candle = 'assets/images/Menu/canddle.png';

// sound for lobby
let bongosbinted = 'assets/sounds/funnysoundclip/bongosbinted.mp3';
let nijisanji = 'assets/sounds/funnysoundclip/nijisanji.mp3';
let rosemibehappy = 'assets/sounds/funnysoundclip/Rosemi-behappy.mp3';
let candlemeta = 'assets/sounds/funnysoundclip/Selen_candle_meta.mp3';
let selensike = 'assets/sounds/funnysoundclip/sike.mp3';

let dragoonImage = `assets/images/game/dragoon.png`;
let dragooneggImage = `assets/images/game/dragoon_egg.png`;

let coinImage = `assets/images/game/coin.png`;
let hatImage = `assets/images/game/Millie_hat.png`;
let sewerImage = `assets/images/game/sewer.png`;

let underwaterImage = `assets/images/game/underwater.jpg`;
let fishImage = `assets/images/game/fish.png`;
//music
let mVolume = 0.5; //slider for volume
let musicPlaying = `false`;
let musiccolor = 10;
let track = `1`; //number adds a red dot
let track1 = `assets/sounds/雨上がりの午後.mp3`; //selen outro bgm
let track2 = `assets/sounds/やさしいじかん.mp3`; //elira bgm
let track3 = `assets/sounds/忘れた記憶.mp3`; //selen bgm
let track4 = `assets/sounds/Accumula Town.mp3`; //furret walk

// lobby
let hover = {
  selengame: 0,
  finanagame: 0,
  milliegame: 0,
}
//distances
//music
let d1 = 50;
let d2 = 50;
let d3 = 50;
let d4 = 50;

//Dragoons game
let dragoons = [];
let dragoonstate = `out`; //in or out of the pen
let flock = 1;
let dragooneggs = [];
let dragooneggstate = `out`; //in or out of the pen
let eggs = 1;

//millie games
let score = 0;
let time = 3600;

let money = {
  caught: false,
}
let fallingcoin = [];
let nbcoin = 3;
let millieplayer = {
  x: 0,
  y: 700,
  vx: 3,
  active: true,
};

//finana games

let mic = undefined;
let lives = 3;

let fish = {
  x: 100,
  y: 200,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  size: 50,
  wallcount: 1,
  realx: 100

};

let gravity = 0.05;

let wall = {
  x: 0,
  y: 0,



}
let obstacles = [];
let nbobstacles = 4;

//buttons
let mbutton1;
let mbutton2;
let mbutton3;

function preload() {
  //image preload
  menuImage = loadImage(`assets/images/Menu/menuImage.jpg`);
  lobbyImage = loadImage(`assets/images/game/lobby.jpg`);
  //selen
  dragoonImage = loadImage(`assets/images/game/dragoon.png`);
  dragooneggImage = loadImage(`assets/images/game/dragoon_egg.png`);

  //millie
  coinImage = loadImage(`assets/images/game/coin.png`);
  hatImage = loadImage(`assets/images/game/Millie_hat.png`);
  sewerImage = loadImage(`assets/images/game/sewer.png`);

  //finana
  underwaterImage = loadImage(`assets/images/game/underwater.jpg`);
  fishImage = loadImage(`assets/images/game/fish.png`);

  //track preload
  track1 = loadSound(`assets/sounds/雨上がりの午後.mp3`); //selen outro bgm
  track2 = loadSound(`assets/sounds/やさしいじかん.mp3`); //elira bgm
  track3 = loadSound(`assets/sounds/忘れた記憶.mp3`); //selen bgm
  track4 = loadSound(`assets/sounds/Accumula Town.mp3`); //furret walk


  selenchibi = loadImage('assets/images/Menu/chibiselen.png');

  // lobby
  ufo = loadImage('assets/images/Menu/ufo.png');
  candle = loadImage('assets/images/Menu/canddle.png');

  // sound for lobby
  bongosbinted = loadSound('assets/sounds/funnysoundclip/bongosbinted.mp3');
  nijisanji = loadSound('assets/sounds/funnysoundclip/nijisanji.mp3');
  rosemibehappy = loadSound('assets/sounds/funnysoundclip/Rosemi-behappy.mp3');
  candlemeta = loadSound('assets/sounds/funnysoundclip/Selen_candle_meta.mp3');
  selensike = loadSound('assets/sounds/funnysoundclip/sike.mp3');
}
// setup()
// Only canvas + random generator
function setup() {
  createCanvas(1100, 800);
  //button menu
  mbutton1 = menubutton(height / 3);
  mbutton2 = menubutton(height / 2);
  mbutton3 = menubutton(height * 2 / 3);

  // different game set up

  // volume set-up
  // mVolume.position(150, 650);
  mVolume = createSlider(0, 0.3, 0.07, 0.001);
  mVolume.style(`width`, `800px`);

}
// draw()
//
// Description of draw() goes here.
function draw() {
  rectMode(CENTER);
  //adjust volume all the time
  adjVolume();

  if (gamescreen === `menu`) {
    if (gameoverlay === `no`) {
      menu();
    }
  }
  // setting the lobby
  if (gamestate === `playing`) {
    if (gamescreen === `lobby`) {
      imageMode(CORNER);
      image(lobbyImage, 0, 0, width, height);
      imageMode(CENTER);
      image(dragoonImage, 940, 600, 80 + hover.selengame, 80 + hover.selengame);
      image(hatImage, 350, 550, 100 + hover.milliegame, 100 + hover.milliegame);
      image(fishImage, 570, 400, 150 + hover.finanagame, 100 + hover.finanagame);

      hover.selengame = 0;
      hover.milliegame = 0;
      hover.finanagame = 0;
      //hovering mouse

      if ((mouseX > 940 - 40) && (mouseX < 940 + 40) &&
        (mouseY > 600 - 40) && (mouseY < 600 + 40)) {
        hover.selengame = 50;

      }
      if ((mouseX > 350 - 50) && (mouseX < 350 + 50) &&
        (mouseY > 550 - 50) && (mouseY < 550 + 50)) {
        hover.milliegame = 50;

      }

      if ((mouseX > 570 - 60) && (mouseX < 570 + 60) &&
        (mouseY > 400 - 50) && (mouseY < 400 + 50)) {
        hover.finanagame = 50;
      }



      // back button
      noStroke();
      fill(37, 142, 112); //X buton
      rect(1050, 50, 50, 50, 5);
      textSize(35);
      textAlign(CENTER);
      fill(255);
      text(`||`, 1050, 60);
    }
  }

  //start different games
  if (gamestate === `playing`) {
    if (gamescreen === `selen`) {

      selen_game();

    }
    // milie game
    if (gamescreen === `millie`) {

      millie_game();
    }
    // finana game
    if (gamescreen === 'finana') {
      finana_game();

    }

  }

  // adjust music in option
  if (gameoverlay === `option`) {
    musicChecker();
    option();


  }
  if (gameoverlay === `credit`) {
    credit();
  }
  // different gameover screen for games
  if (gameoverlay === `selen_gover`) {
    //window
    fill(0, 0, 0, 70)
    rect(width / 2, height / 2, 900, 500, 20);

    //buttons
    displayMButton(mbutton1);
    displayMButton(mbutton2);
    displayMButton(mbutton3);


    //gover text
    textSize(51);
    textAlign(CENTER);
    fill(255);
    text(`Replay`, width / 2, 285);
    text(`Options`, width / 2, 420);
    text(`Lobby`, width / 2, 550);
    textSize(25);
    text(`Good job on gathering all the Dragoons and the Hatchling!`, width / 2, 635);

  }

  if (gameoverlay === `millie_gover`) {
    //window
    fill(0, 0, 0, 70)
    rect(width / 2, height / 2, 900, 500, 20);

    //buttons
    displayMButton(mbutton1);
    displayMButton(mbutton2);
    displayMButton(mbutton3);
    //gover text
    textSize(51);
    textAlign(CENTER);
    fill(255);
    text(`Replay`, width / 2, 285);
    text(`Options`, width / 2, 420);
    text(`Lobby`, width / 2, 550);
    textSize(25);
    text(`Money gathered ${score}`, width / 2, 635);

  }
  if (gameoverlay === `finana_gover`) {
    //window
    fill(0, 0, 0, 70)
    rect(width / 2, height / 2, 900, 500, 20);

    //buttons
    displayMButton(mbutton1);
    displayMButton(mbutton2);
    displayMButton(mbutton3);
    //gover text
    textSize(51);
    textAlign(CENTER);
    fill(255);
    text(`Replay`, width / 2, 285);
    text(`Options`, width / 2, 420);
    text(`Lobby`, width / 2, 550);
    textSize(25);
    text(`Wall dodge ${score}`, width / 2, 635);
  }
}

function adjVolume() {
  // setting volume
  track1.setVolume(mVolume.value());
  track2.setVolume(mVolume.value());
  track3.setVolume(mVolume.value());
  track4.setVolume(mVolume.value());
}

function selen_game() {
  selen_main();
  selen_pieces();
  selen_checkdist();
  selen_gameover();
}
// Selen Game
function selen_setup() {
  //random number of dragoon on the scrren
  flock = random(1, 10);
  eggs = random(0, 10);

  // //----assign position to dragoons
  // for (let i = 0; i < flock; i++) {
  //   let x = random(20, width);
  //   let y = random(20, width);
  //   let dmember = new Dragoon(x, y);
  //   dragoons.push(dmember);
  // }

  //making dragoons gving them position
  for (let i = 0; i < flock; i++) {
    dragoons[i] = createDragoons(random(20, width), random(20, height));
  }

  for (let i = 0; i < eggs; i++) {
    dragooneggs[i] = createDragooneggs(random(20, width), random(20, height));
  }
}

function selen_main() {
  background(71, 179, 57);

  //pen

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

function selen_pieces() {
  for (let i = 0; i < dragoons.length; i++) {
    displayDragoons(dragoons[i]);
  }

  for (let i = 0; i < dragooneggs.length; i++) {
    displayDragooneggs(dragooneggs[i]);
  }
  for (let i = 0; i < dragooneggs.length; i++) {
    moveDragooneggs(dragooneggs[i]);
  }

  // line(135, 335,
  //   265, 335);
  // line(135, 335,
  //   135, 465);
  // line(135, 465,
  //   265, 465);

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

function selen_checkdist() {
  //check the distance for mouse movement
  //for the dragoons
  for (let i = 0; i < dragoons.length; i++) {
    let dis = dist(mouseX, mouseY, dragoons[i].x, dragoons[i].y)

    if (dis < 25) {
      if (mouseX > dragoons[i].x + 10) { //mouse is on the right
        dragoons[i].x -= 10
      }
      if (mouseX < dragoons[i].x - 10) { //mouse on the left
        dragoons[i].x += 10
      }
      if (mouseY > dragoons[i].y + 10) { //mouse is below
        dragoons[i].y -= 10
      }
      if (mouseY < dragoons[i].y - 10) { //mousse is above
        dragoons[i].y += 10
      }
    }
  }
  // for the eggs
  for (let i = 0; i < dragooneggs.length; i++) {
    let disegg = dist(mouseX, mouseY, dragooneggs[i].x, dragooneggs[i].y)

    if (disegg < 17) {
      if (mouseX > dragooneggs[i].x + 10) { //mouse is on the right
        dragooneggs[i].x -= 10
      }
      if (mouseX < dragooneggs[i].x - 10) { //mouse on the left
        dragooneggs[i].x += 10
      }
      if (mouseY > dragooneggs[i].y + 10) { //mouse is below
        dragooneggs[i].y -= 10
      }
      if (mouseY < dragooneggs[i].y - 10) { //mousse is above
        dragooneggs[i].y += 10
      }
    }
  }
  // console.log(mouseX, mouseY);
  // // making the pen not passable
  // for (let i = 0; i < dragoons.length; i++) {
  //   if ((dragoons[i].x >= 135 + 25) && (dragoons[i].x <= 265 - 25) && (dragoons[i].y >= 330 + 25) && (dragoons[i].y <= 340 - 25)) {
  //     if (dragoons[i].y >= 340 - 25) {
  //       dragoons[i].y += 100;
  //     }
  //     if (dragoons[i].y <= 330 + 25) {
  //       dragoons[i].y -= 100;
  //     }
  //   }
  // }
  // for (let i = 0; i < dragoons.length; i++) {
  //   if ((dragoons[i].x >= 135) && (dragoons[i].x <= 265) && (dragoons[i].y >= 330) && (dragoons[i].y <= 340)) {
  //
  //     dragoons[i].y += 1;
  //   }

  // }
}

function selen_gameover() {
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
    gamestate = `pause`;
    gameoverlay = `selen_gover`;
  }

}

// End of selen game
// Millie game start
function millie_setup() {
  // place player
  millieplayer.x = width / 2;
  millieplayer.vx = 3;

  //reset the score and time
  time = 3600;
  score = 0;
  // coin set up
  for (let i = 0; i < nbcoin; i++) {
    fallingcoin[i] = createStartCoin(random(20, width - 30), random(20, 50), random(0.5, 3));
  }
}

function createStartCoin(x, y, speed) {
  let money = {
    x: x,
    y: y,
    size: 30,
    speed: speed,
    caught: false,
  }
  return money;
}

function millie_game() {
  // set the bg
  imageMode(CORNER);
  image(sewerImage, 0, 0, width, height);
  // start timer + chech gameover
  timer();
  millie_gameover();

  //pause buttons
  noStroke();
  fill(37, 142, 112); //X buton
  rect(1050, 50, 50, 50, 5);
  textSize(35);
  textAlign(CENTER);
  fill(255);
  text(`||`, 1050, 60);

  //intructions
  textAlign(LEFT);
  textSize(24)
  text(`Use the left and right arrow to move the hat and collect as much money before time runs out`, 10, 80);

  // check if the money is caught to continue
  if (money.caught === false) {
    millie_player();
    millie_coinadd();
    millie_coin();
    millie_coincatch();

  }
  millie_deletecoin();

  // display time and score
  push();
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text(`Money ${score}`, width - 70, 100);
  pop();

  push();
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(`Time ${time}`, 100, 50);
  pop();
}

function millie_player() {
  // draw the player
  push()
  fill(0, 64, 214);
  noStroke();
  // (CENTER);
  imageMode(CENTER);
  image(hatImage, millieplayer.x, millieplayer.y, 200, 200); //20 is place holdre since there will be a image
  pop();

  //controls
  if (keyIsDown(LEFT_ARROW)) {

    millieplayer.x += -millieplayer.vx;

  } else if (keyIsDown(RIGHT_ARROW)) {

    millieplayer.x += millieplayer.vx;

  }
  // wrap the player
  if (millieplayer.x > width) {
    millieplayer.x = 0
  }
  if (millieplayer.x < 0) {
    millieplayer.x = width
  }
}

function millie_coin() {
  //display the money
  for (let i = 0; i < fallingcoin.length; i++) {
    millie_displaycoin(fallingcoin[i]);
  }



}

function millie_coinadd() {
  let chance = random(0, 1);
  if (chance < 0.01) {
    let newcoin = {
      x: random(0, width - 30),
      y: random(0, 50),
      speed: random(0.5, 2),
      size: 30,
      caught: false,
    }

    fallingcoin.push(newcoin);


  }
}

function millie_displaycoin(money) {
  // usual display
  imageMode(CENTER);
  image(coinImage, money.x, money.y, money.size, money.size);

  //falling
  if (money.caught === false) {
    money.y += money.speed;
  }
  if (money.caught === true) {
    money.y = 1000
  }
}

function millie_deletecoin() {
  // delete the coin when caught
  for (let i = 0; i < fallingcoin.length; i++) {
    if (fallingcoin[i].y >= 1000) {
      fallingcoin.splice(i, 1);

    }

  }
}

function millie_coincatch() {
  // check each coin and the player
  for (let i = 0; i < fallingcoin.length; i++) {
    if ((fallingcoin[i].x >= millieplayer.x - 50) &&
      (fallingcoin[i].x <= millieplayer.x + 50) &&
      (fallingcoin[i].y >= millieplayer.y - 50) &&
      (fallingcoin[i].y <= millieplayer.y + 50)) {
      fallingcoin[i].caught = true;
      score++;
    }
  }
}

function millie_gameover() {
  // timed game if time run out gameover state
  if (time <= 0) {
    gamestate = `pause`
    gameoverlay = `millie_gover`

  }
}
// Millie game End

//finana games
function finana_game() {
  // set bg
  push();
  imageMode(CORNER);
  image(underwaterImage, 0, 0, width, height);
  pop();

  // all the functions
  finana_micinput();
  finana_player();
  // for wall specfitly
  finana_obstacle();
  finana_display();
  finana_walladd();
  finanan_walldist();
  finana_deletewall();
  // gameover state
  finana_gameover();

  // pause button
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
  text(`Use your voice to move the fish up and down and avoid obstacles`, 10, 80);

  // display score and lives
  push();
  textAlign(CENTER);
  textSize(25);
  fill(255);
  text(`Score ${score}`, width - 70, 100);
  pop();

  push();
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(`Lives ${lives}`, 100, 50);
  pop();
}

function finana_setup() {
  // reset variables
  score = 0;
  lives = 3;
  mic = new p5.AudioIn();
  mic.start();
  // create the first obstacles
  for (let i = 0; i < nbobstacles; i++) {
    obstacles[i] = createObstacle(random(130, width), random(0, height - 200), random(10, 150), random(10, 200));
  }
}

function createObstacle(x, y, width, height) {
  let mur = {
    x: x,
    y: y,
    width: width,
    height: height,

  }
  return mur;
}

function finana_micinput() {
  // maping the mic level and putting the speed of the character
  let level = mic.getLevel();
  fish.vy = map(level, 0, 0.4, 0, 150);
  fish.vx = map(level, 0, 0.4, 0, 50);
}

function finana_player() {
  // making the player advance
  fish.ay = (gravity * 100) + -fish.vy;
  fish.y += fish.ay;


  //display
  push();
  fill(255);
  image(fishImage, 100, fish.y, fish.size, 50);
  pop();

  // constraining the player to the field
  if (fish.y > height - 25) {
    fish.y = height - 25;
  }
  if (fish.y < 25) {
    fish.y = 0 + 25;
  }

}

function finana_obstacle() {
  //make the block advance
  fish.ax += -fish.vx;
  fish.realx += fish.vx;
  fish.x += fish.vx;




}

function finana_display() {
  // display walls array
  for (let i = 0; i < obstacles.length; i++) {
    finana_displaywall(obstacles[i]);
  }
}

function finana_displaywall(mur) {
  // display specific wall
  push();
  rectMode(CORNER);
  fill(89, 89, 97);
  rect(mur.x + fish.ax, mur.y, mur.width, mur.height);
  pop();
}

function finana_walladd() {
  // add a wall at pecise distance +into array
  if (fish.x >= width - 400) {
    for (let i = 0; i < random(4, 8); i++) {
      let newwall = {
        x: random(fish.realx + width + 100, fish.realx + 2 * width - 100),
        y: random(0, height - 200),
        width: random(50, 150),
        height: random(10, 200),
      }
      obstacles.push(newwall);
    }
    fish.wallcount++;
    fish.x = 100;
  }
}

function finana_deletewall() {
  // delete the wall to not cram the array + add a point
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x <= fish.realx - 200) {
      obstacles.splice(i, 1);
      score++;

    }

  }
}

function finanan_walldist() {
  // check if the player and walls collide
  for (let i = 0; i < obstacles.length; i++) {
    if ((fish.realx >= obstacles[i].x) && (fish.realx <= obstacles[i].x + width)) {
      if ((fish.y >= obstacles[i].y) && (fish.y <= obstacles[i].y + obstacles[i].height)) {
        obstacles.splice(i, 1);
        lives -= 1;
      }
    }
  }
}

function finana_gameover() {
  // lives game en of game when no more live
  if (lives <= 0) {
    gamestate = `pause`;
    gameoverlay = 'finana_gover';
  }
}

function menu() {
  clear();
  //bg
  imageMode(CORNER);
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

  // selen chibi
  image(selenchibi, 200, 800, 50, 50);
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
  rect(CENTER);
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
  // for helping draw the play button
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

  if (gamescreen != 'menu') {
    if (gamescreen === 'lobby') {
      //lobby button
      (CENTER);
      noStroke();
      fill(37, 142, 112); //pomu color
      rect(width / 2, 575, 350, 100, 10);
      fill(255);
      textAlign(LEFT);
      textSize(50);
      text(`Back to menu`, 400, 595); //menu text
    } else {
      //lobby button
      (CENTER);
      noStroke();
      fill(37, 142, 112); //pomu color
      rect(width / 2, 575, 350, 100, 10);
      fill(255);
      textAlign(LEFT);
      textSize(50);
      text(`Back to lobby`, 400, 595); //lobby text
    }
  }


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
  text(`Full links in the README`, 150, 270);
  textSize(17)
  // bmenu + lobby
  text(`Menu background by brgfx -www.freepik.com`, 150, 300);
  text(`Lobby background by freepik -www.freepik.com`, 150, 320);
  // selen game
  text(`dragoons by Selen Tatsuki -https://twitter.com/selen_tatsuki/status/1432534022308212750`, 150, 350);
  text(`dragoons egg by Selen Tatsuki -https://twitter.com/selen_tatsuki/status/1432534022308212750`, 150, 370);
  // millie game
  text(`Millie hat shared by Millie Parfait -https://twitter.com/MillieParfait/status/1447084913593888771`, 150, 410);
  text(`coins by rawingMyDiary -www.freepik`, 150, 430);
  text(`sewer by upklyak -www.freepik.com`, 150, 450);
  // finana games
  text(`fish by freepik -www.freepik.com`, 150, 480);
  text(`underwater by upklyak -www.freepik.com`, 150, 500);

  // music
  text(`Afternoon after rain -https://dova-s.jp/`, 150, 540);
  text(`Easy time -https://dova-s.jp/`, 150, 560);
  text(`Forgotten Memories -https://dova-s.jp/`, 150, 580);
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

function timer() {
  if (time >= 0) {
    time -= 1;
  }
}

function mousePressed() {
  //overlay not on
  if (gamestate === `playing`) {


    //pause button in game screen
    if (gamescreen != `menu`) {
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
        gamescreen = `lobby`

      }
      //option screen
      if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
        (mouseY > 400 - 35) && (mouseY < 400 + 35)) {
        gameoverlay = `option`


      }
      //cedit screen
      if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
        (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
        gameoverlay = `credit`;
      }

    }


    // lobby interaction
    if (gamescreen === 'lobby') {

      if ((mouseX > 940 - 40) && (mouseX < 940 + 40) &&
        (mouseY > 600 - 40) && (mouseY < 600 + 40)) {
        gamescreen = `selen`
        selen_setup();

      }
      if ((mouseX > 350 - 50) && (mouseX < 350 + 50) &&
        (mouseY > 550 - 50) && (mouseY < 550 + 50)) {
        gamescreen = `millie`
        millie_setup();

      }

      if ((mouseX > 570 - 60) && (mouseX < 570 + 60) &&
        (mouseY > 400 - 50) && (mouseY < 400 + 50)) {
        gamescreen = `finana`
        finana_setup();

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
    //back to lobby in game (!=menu)
    if (gamescreen != 'menu') {
      if (gamescreen === 'lobby') {
        if ((mouseX > width / 2 - 175) && (mouseX < width / 2 + 175) &&
          (mouseY > 575 - 50) && (mouseY < 575 + 50)) {
          gamescreen = `menu`
          gamestate = `playing`;
          gameoverlay = `no`;
        }
      } else {
        if ((mouseX > width / 2 - 175) && (mouseX < width / 2 + 175) &&
          (mouseY > 575 - 50) && (mouseY < 575 + 50)) {
          gamescreen = `lobby`
          gamestate = `playing`;
          gameoverlay = `no`;
        }
      }
    }
    // music selector
    if (gameoverlay === `option`) {
      musicSelector();


    }
  }
  //gameover screen
  if (gameoverlay === `selen_gover`) {
    //replay screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 200) &&
      (mouseY > 266 - 35) && (mouseY < 266 + 35)) {
      gamescreen = `selen`;
      gameoverlay = `no`;
      gamestate = `playing`;
      //making dragoons gving them position
      selen_setup();
    }

    //option screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 400 - 35) && (mouseY < 400 + 35)) {
      gameoverlay = `option`;
    }

    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
      gamescreen = 'lobby';
      gamestate = `playing`;
      gameoverlay = 'no';
    }
  }
  if (gameoverlay === `millie_gover`) {
    //replay screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 200) &&
      (mouseY > 266 - 35) && (mouseY < 266 + 35)) {
      gamescreen = `millie`;
      gameoverlay = `no`;
      gamestate = `playing`;

      //making coins gving them position
      millie_setup();
    }
    //option screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 400 - 35) && (mouseY < 400 + 35)) {
      gameoverlay = `option`;
    }

    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
      gamescreen = 'lobby';
      gamestate = `playing`;
      gameoverlay = 'no';
    }
  }

  if (gameoverlay === `finana_gover`) {
    //replay screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 200) &&
      (mouseY > 266 - 35) && (mouseY < 266 + 35)) {
      gamescreen = `finana`;
      gameoverlay = `no`;
      gamestate = `playing`;

      //making wall gving them position
      finana_setup();
    }

    //option screen
    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 400 - 35) && (mouseY < 400 + 35)) {
      gameoverlay = `option`;
    }

    if ((mouseX > 550 - 200) && (mouseX < 550 + 400) &&
      (mouseY > 532 - 35) && (mouseY < 532 + 35)) {
      gamescreen = 'lobby';
      gamestate = `playing`;
      gameoverlay = 'no';
    }
  }

}
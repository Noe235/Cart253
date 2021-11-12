/**
Niji-Games
Noemie

*/

"use strict";


//Var
let gamestate = `no` //playing or no

let score = 0;
let lives = 3;


let user = undefined;

let money = undefined;
let fallingcoin = [];
let nbcoin = 3;
/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);
  user = new Player(width / 2, height * 2.5 / 3);

  for (let i = 0; i < nbcoin; i++) {
    let x = random(0, width - 30);
    let y = random(0, 50);
    let speed = random(0.5, 3);
    money = new Coin(x, y, speed);
    fallingcoin.push(money);
  }
}


/**
Description of draw()
*/
function draw() {
  background(75);
  if (gamestate === `no`) {
    push();
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(`Click to start the game`, width / 2, height / 2);
    pop();
  }
  if (gamestate === `over`) {
    push();
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(`You lost all your lives`, width / 2, height / 2);
    text(`Click to try again the game`, width / 2, height * 1.5 / 2);
    pop();



  }
  if (gamestate === `playing`) {
    user.display();
    user.controls();

    coinadd()
    catching()
    for (let i = 0; i < fallingcoin.length; i++) {
      let money = fallingcoin[i];
      money.display();
      money.falling();
    }



    push();
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(`Score ${score}`, width - 50, 50);
    pop();

    push();
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(`Lives ${lives}`, 50, 50);
    pop();

    for (let i = 0; i < fallingcoin.length; i++) {
      if (fallingcoin[i].y > width &&
        fallingcoin[i].y < 900) {
        lives = lives - 1;
        fallingcoin[i].caught = true

      }
    }
    if (lives === 0) {
      gamestate = `over`;
      for (let i = 0; i < fallingcoin.length; i++) {
        fallingcoin[i].caught = true;
      }
    }
  }
}

function mousePressed() {
  if (gamestate === `no`) {
    gamestate = `playing`
    lives = 3;
    score = 0;
  }
  if (gamestate === `over`) {
    gamestate = `playing`
    lives = 3;
    score = 0;
  }
}

function coinadd() {
  let chance = random(0, 1);
  if (chance < 0.01) {
    let x = random(0, width - 30);
    let y = random(0, 50);
    let speed = random(0.5, 2);
    money = new Coin(x, y, speed);
    fallingcoin.push(money);
    console.log(`new coin`);
  }
}
//^^^this might not tbe the best method to add the coins because
// sometimes there is nothing or too much

function catching() {
  for (let i = 0; i < fallingcoin.length; i++) {
    if ((fallingcoin[i].x >= user.x - 15) &&
      (fallingcoin[i].x <= user.x + 65) &&
      (fallingcoin[i].y >= user.y - 15) &&
      (fallingcoin[i].y <= user.y + 65)) {
      fallingcoin[i].caught = true
      score++;
    }
  }
  ///^^^^^watch out the array will get too big got to delete the one earlier ones.
}
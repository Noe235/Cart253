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

  if (gamestate === `playing`) {
    user.display();
    user.controls();

    coinadd()
    for (let i = 0; i < fallingcoin.length; i++) {
      let money = fallingcoin[i];
      money.display();
      money.falling();
    }



    push();
    textAlign(CENTER);
    textSize(25);
    fill(255);
    text(`Score ${score}`, width - 100, 50);
    pop();
  }
}

function mousePressed() {
  if (gamestate === `no`) {
    gamestate = `playing`
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

function catching() {

}
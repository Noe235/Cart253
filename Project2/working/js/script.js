/**
Niji-Games
Noemie

*/

"use strict";


//Var
let gamestate = `no` //playing or no

let user = undefined;
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
  }


}

function mousePressed() {
  if (gamestate === `no`) {
    gamestate = `playing`
  }

}
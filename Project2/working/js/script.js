/**
Niji-Games
Noemie

*/

"use strict";


//Var
let gamestate = `no` //playing or no
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


}

function mousePressed() {
  if (gamestate === `no`) {
    gamestate = `playing`
  }

}
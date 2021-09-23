/**
I Like to move it
Noemie


*/

"use strict";

/**
useless for now
*/
function preload() {}

let bg = {
  r: 10,
  g: 250,
  b: 145,
};

let rectangle1 = {
  x: -10,
  y: 500,
  size: 10,
  speed: -0.5,

};

let rectangle2 = {
  x: 430,
  y: 430,
  speed: 10,
};

let ellipsemiddle = {
  x: 250,
  y: 400,
  w: 120,
  h: 80,
  v: 0.2
};
/**
create canvas
*/
function setup() {
  createCanvas(500, 500)

}
/**
COT drawing
*/
function draw() {
  background(bg.r, bg.g, bg.b, 50)

  //get all the resctangle to be drawed from center
  rectMode(CENTER);

  //rectangle1
  noStroke();

  rectangle1.x = rectangle1.x - rectangle1.speed;
  rectangle1.y = rectangle1.y + rectangle1.speed;
  if (rectangle1.y < -20) {
    rectangle1.y = random(-10, 500);
    rectangle1.x = -10;
    rectangle1.size = random(20, 120);
  };
  fill(120, 56, 145);
  rect(rectangle1.x, rectangle1.y, rectangle1.size);

  //ellispemiddle
  push();
  let acc = map(mouseX, 0, width, 0.000001, 1);
  ellipsemiddle.v += acc + 0.01;
  noStroke();
  translate(ellipsemiddle.x, ellipsemiddle.y);
  rotate(ellipsemiddle.v)
  fill(45, 67, 135);
  ellipse(0, 0, ellipsemiddle.w, ellipsemiddle.h);
  pop();

  //rectangle2right
  push();
  rectangle2.speed += 10
  noStroke();
  translate(rectangle2.x, rectangle2.y);
  rotate(rectangle2.speed)
  fill(214, 167, 254);
  rect(0, 0, 75, 75);
  pop();

  //bezier curve
  let ym = constrain(mouseY, 0, 500)
  let bcmouv = map(ym, 0, height, 500, -500);
  noFill();
  strokeWeight(4);
  stroke(0);
  bezier(0, 200, 200, -bcmouv + 100, 350, bcmouv, width, 200);

}

function mousePressed() {

  bg.r = random(0, 255);
  bg.g = random(0, 255);
  bg.b = random(0, 255);

}
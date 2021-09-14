"use strict";

/**************************************************
Template p5 project
Noemie

doing the tutorials for week 2
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas (640, 480);

  background(200, 200, 200);

  line(0, 0, 500, 500)

  rect(200, 200, 100, 100)

  ellipse(250,80,50,100);


//drawingmode change test
  rectMode(CENTER);
  rect(250, 250, 100,100);

//making a cone
  noStroke();
  fill(243,49,62)
  ellipseMode(CORNER);

  ellipse(250, 350, 100, 100);

  ellipse(250,350,80,80);

  ellipse(250,350,60,60);

  ellipse(250,350,40,40);

  ellipse(250,350,20,20);
    fill(0,0,25);



}

// draw()
//
// Description of draw() goes here.
function draw() {

}

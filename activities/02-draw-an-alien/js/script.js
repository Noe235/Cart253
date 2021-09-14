"use strict";

/**************************************************
Template p5 project
Noemie

Making a cute spider alien

**************************************************/

// setup()
//
// Description of setup() goes here.

function setup() {
  //variables
    var x = random (0,255);
    var  y = random (0,255);
    var  z = random (0,255);
  createCanvas (1000, 800) ;
  //background(0)
    background(x,y,z);

  //body
    fill(128, 82, 74);
    noStroke();
    circle (450, 600, 700);


  //head
    rectMode(CENTER)
    stroke(0);
    fill(54);
    rect (450, 170,600,300);

  //fangs
  fill (255);
  stroke("red");
  strokeWeight(4);
    triangle (300, 350,
              250, 150,
              350, 150);

    triangle (600, 350,
              550, 150,
              650, 150);

  //eyes
  fill (100);
  stroke(0);
  strokeWeight(1);
    ellipse (300, 100, 100, 70);
    ellipse (450, 100, 100, 70);
    ellipse (600, 100, 100, 70);

  fill ("yellow");
    ellipse (300, 100, 50, 70);
    ellipse (450, 100, 50, 70);
    ellipse (600, 100, 50, 70);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}

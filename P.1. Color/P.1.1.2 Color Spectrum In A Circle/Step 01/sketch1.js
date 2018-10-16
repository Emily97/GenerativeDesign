'use strict';
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, 100, 100);
    noLoop();
}

function draw(){
  // Using the beginShape() and endShape() functions allow creating more complex forms.
  beginShape(TRIANGLE_FAN);
    vertex(57.5, 50);
    vertex(57.5, 15);
    vertex(92, 50);
    vertex(57.5, 85);
    vertex(22, 50);
    vertex(57.5, 15);
  endShape();
}

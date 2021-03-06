'use strict';
function setup(){
    createCanvas(800,400);
    // The range of values for saturation and brightness are adjusted in such a way that mouse coordinates can be taken as their values.
    colorMode(HSB, 360, 100, 100);
    noLoop();
}

function draw(){
  // Using the beginShape() and endShape() functions allow creating more complex forms.
  // The TRIANGLE_FAN is requiredd to make a circle.
  // To start the TRIANGLE_FAN must have a starting position which is the centre and the vertexs are
  // then made to create the shape. When the endShape function is declared it stops the creation of vertexes
  beginShape(TRIANGLE_FAN);
    vertex(57.5, 50);
    vertex(57.5, 15);
    vertex(92, 50);
    vertex(57.5, 85);
    vertex(22, 50);
    vertex(57.5, 15);
  endShape();
}

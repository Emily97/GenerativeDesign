'use strict';
var segmentCount = 360;
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, width, height);
    noStroke();
}

function draw(){
  background('violet');
  var step = 360/segmentCount;
  var radius = height/2;

  beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    for(var angle = 0; angle <= 360; angle += step) {
        var vx = radius * cos(radians(angle)) + width/2;
        var vy = radius * sin(radians(angle)) + height/2;
        vertex(vx,vy);
        fill(angle,mouseX,mouseY);
    }
  endShape();
}

function keyPressed(){
// if the s key is pressed the canvas is saved as a png, the file will be named by using a timestamp method found in the generative design library
  if(key == 's' || key == 'S') saveCanvas(gd.timestamp(),'png');

// the switch() command checks the last key pressed, which then switches easily between the keys to increase or decrease the number of segments.
  switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
    }
}

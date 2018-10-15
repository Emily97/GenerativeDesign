'use strict';
var segmentCount = 360;
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, 100, 100);
    // rectMode(CENTER);
    noStroke();
}

function draw(){
  background('violet');
  var angleIncrement = 360/segmentCount;
  var radius = 200;

  beginShape(TRIANGLE_FAN);
  vertex(width/2,height/2);
    for(var angle = 0; angle <= 360; angle += angleIncrement){
      var vx = radius * cos(radians(angle)) + width/2;
      var vy = radius * sin(radians(angle)) + height/2;
      fill(angle, 100, 100);
      vertex(vx,vy);
    }
  endShape();
}

function keyPressed(){
  if(key == 's' || key == 'S') saveCanvas(gd.timestamp(),'png');

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

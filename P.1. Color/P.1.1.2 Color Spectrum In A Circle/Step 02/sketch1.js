'use strict';
var segmentCount = 360;
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, 100, 100);
    // noStroke();
}

function draw(){
  background('violet');
  var step = 360/segmentCount;
  var radius = 200;

  fill(230,100,100);
  beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    for(var angle = 0; angle <= 90; angle += step) {
        var vx = radius * cos(radians(angle)) + width/2;
        var vy = radius * sin(radians(angle)) + height/2;
        vertex(vx,vy);
        fill(100,100,100);
    }
  endShape();
}

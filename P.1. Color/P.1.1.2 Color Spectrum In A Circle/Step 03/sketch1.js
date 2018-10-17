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
    // increase the range between 0 to 360 for the angle. 
    // have the saturation and brightness be effected by the mouses x or y-value.
    for(var angle = 0; angle <= 360; angle += step) {
        var vx = radius * cos(radians(angle)) + width/2;
        var vy = radius * sin(radians(angle)) + height/2;
        vertex(vx,vy);
        fill(angle,mouseX,mouseY);
    }
  endShape();
}

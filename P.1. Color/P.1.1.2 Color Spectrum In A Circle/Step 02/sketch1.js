'use strict';
var segmentCount = 360;
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, 100, 100);
}

function draw(){
  background('violet');
  // the angle increment step depends on how many segments are to be drawn below
  // in this case because later we will be filling a circle of 360 degrees we will make 360 segments.
  var step = 360/segmentCount;
  // the radius of the circle must be half the height of the canvas otherwise the circle would not fit.
  var radius = height/2;

  beginShape(TRIANGLE_FAN);
    // the first vertex point (v1) is in the centre of the canvas
    vertex(width/2,height/2);
    // for the other vertices (v2, v3 .....), angle has to be converted from degrees(0-360) to radians(0-2π) because the functions sin() and cos() require radians and not degrees.
    for(var angle = 0; angle <= 90; angle += step) {
        var vx = radius * cos(radians(angle)) + width/2;
        var vy = radius * sin(radians(angle)) + height/2;
        // the values from finding the cos and sin of the angles is then placed in the this vertex method.
        vertex(vx,vy);
        fill(100,100,100);
    }
  endShape();
}

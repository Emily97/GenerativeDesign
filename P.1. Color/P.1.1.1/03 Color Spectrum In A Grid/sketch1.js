'use strict';
function setup(){
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100);
    // noStroke();
}

function draw(){
    // declare a variable that will increment in the for loop.
  var stepX = 50;
  var stepY = 50;
        // rows and columns of squares are created using a nested loop that increments by 50 pixels in the x and y direction.
      for(var gridY = 0; gridY < height; gridY += stepY){
        for(var gridX = 0; gridX < width; gridX += stepX){
          fill('red');
          rect(gridX,gridY,stepX,stepY);
        }
      }
}

'use strict';
function setup(){
    createCanvas(500,500);
    colorMode(HSB, width, height, 100);
    noStroke();
}

function draw(){
  var stepX = mouseX/5 + 1;
  var stepY = mouseY/5 + 1;

      for(var gridY = 0; gridY < height; gridY += stepY){
        for(var gridX = 0; gridX < width; gridX += stepX){
          fill(gridX,height - gridY,100);
          rect(gridX,gridY,stepX,stepY);
        }
      }
}

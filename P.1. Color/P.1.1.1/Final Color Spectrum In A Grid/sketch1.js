'use strict';
function setup(){
    createCanvas(500,500);
    // the range for the Hue and Saturation are set to the width and height of the canvas
    // this means the range of values for Hue and Saturation in this case is 0 - 500.
    colorMode(HSB, width, height, 100);
    //we add the noStroke() method so we can see the transition between the low to high range of saturation more clearly.
    noStroke();
}

function draw(){
    // stepX and stepY now increment depending on the mouses x and y position.
    //  
  var stepX = mouseX/5 + 1;
  var stepY = mouseY/5 + 1;

      for(var gridY = 0; gridY < height; gridY += stepY){
        for(var gridX = 0; gridX < width; gridX += stepX){
            // now we use the gridX variable as it increments to change the Hue.
            // by minusing gridY from height we can see the colours we the highest saturation at the top of the canvas and the lowest saturation at the base of the canvas
          fill(gridX,height - gridY,100);
          rect(gridX,gridY,stepX,stepY);
        }
      }
}

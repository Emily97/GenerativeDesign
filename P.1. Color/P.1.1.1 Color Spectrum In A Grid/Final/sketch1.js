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
    // By dividing mouseX and mouseY by the scaling factor were are scaling the canvas so that instead of there being 500 steps there is now only 25. This reduces the chance of longer loading speeds.
    // By adding 2 to the stepX and Y we reduce the chance of the value being too small which cause the page to freeze.
  var scale = width/20;
  var stepX = mouseX/scale + 2;
  var stepY = mouseY/scale + 2;

      for(var gridY = 0; gridY < height; gridY += stepY){
        for(var gridX = 0; gridX < width; gridX += stepX){
            // now we use the gridX variable as it increments to change the Hue.
            // by minusing gridY from height we can see the colours we the highest saturation at the top of the canvas and the lowest saturation at the base of the canvas
          fill(gridX,height - gridY,100);
          rect(gridX,gridY,stepX,stepY);
        }
      }
}

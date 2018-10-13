'use strict';
function setup(){
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100);
    // noStroke();
}

function draw(){
        // A loop is now used to create 10 rectangles across the screen.
        // We use gridX to determine the starting point of the rectangle on the x axis.
        // This is incremented by 50 pixels each loop until it reaches the edge of the canvas.
        for(var gridX = 0; gridX < width; gridX += 50){
          fill('red');
          rect(gridX,0,100,100);
        }
}

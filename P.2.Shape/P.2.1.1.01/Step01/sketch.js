// GLOBAL VARIABLES
var numberTiles;
var tileWidth;
// The setup function is called once when the program starts. It initializes the canvas properties such as canvas size, colorMode etc.
function setup(){
    // defines the size of the canvas in pixels, in the browser window.
    createCanvas(500,500);
    ellipseMode(CENTER);
    rectMode(CENTER);
    angleMode(DEGREES);
}

// Unlike the setup function, the draw function constantly executes all the lines of code found within it.
function draw(){
    // This determine the background color of the canvas.
    // background(90);
    numberTiles = 3;
    tileWidth = width/numberTiles;
    // translate(tileWidth/2,tileWidth/2);
    for(var gridY = 0; gridY < numberTiles; gridY++){
      for(var gridX = 0; gridX < numberTiles; gridX++){
        var posX = tileWidth * gridX + tileWidth/2;
        var posY = tileWidth * gridY + tileWidth/2;
        fill(0);
        stroke(255);
        strokeWeight(1);
        push();
        translate(posX, posY);
        rotate(45);
        rect(0, 0, tileWidth, tileWidth);
        pop();
      }
    }
}

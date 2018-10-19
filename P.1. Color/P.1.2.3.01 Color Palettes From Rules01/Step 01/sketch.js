'use strict';
// declaration of global variables that determine the number of tiles in the x and y direction
var numberOfColumns = 50;
var numberOfRows = 10;

function setup() {
  //the canvas is created to fit the browser window
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  //tiles width and height are calculated by dividing into numberOfColumns and numberOfRows respectively
  var tileWidth = width / numberOfColumns;
  var tileHeight = height / numberOfRows;

  //using a loop to create rows and columns of tiles all preset to color red
  for (var gridY = 0; gridY < numberOfRows; gridY++) {
    for (var gridX = 0; gridX < numberOfColumns; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      fill('red');
      rect(posX, posY, tileWidth, tileHeight);
    }
  }
}

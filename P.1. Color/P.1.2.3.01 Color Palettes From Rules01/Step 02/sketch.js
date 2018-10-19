'use strict';

var numberOfColumns = 50;
var numberOfRows = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  // limit mouse coordinates to the canvas
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  // mapping the range of values for number of columns and rows on screen
  // in this case the max number of columns generated is 50
  var mouseNumberOfColumns = int(map(mX, 0, width, 1, numberOfColumns));
  var mouseNumberOfRows = int(map(mY, 0, height, 1, numberOfRows));
  var tileWidth = width / mouseNumberOfColumns;
  var tileHeight = height / mouseNumberOfRows;

  for (var gridY = 0; gridY < numberOfRows; gridY++) {
    for (var gridX = 0; gridX < numberOfColumns; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      fill('red');
      rect(posX, posY, tileWidth, tileHeight);
    }
  }
}

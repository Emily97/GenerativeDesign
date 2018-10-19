'use strict';

var numberOfColumns = 50;
var numberOfRows = 10;
//declaring global variables that are empty arrays that will be filled with values of Hue, Saturation and Brightness.
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  // initializing random values for each column tile which will later generate different color tiles.
  for (var i = 0; i < numberOfColumns; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  var counter = 0;

  var mouseNumberOfColumns = int(map(mX, 0, width, 1, numberOfColumns));
  var mouseNumberOfRows = int(map(mY, 0, height, 1, numberOfRows));
  var tileWidth = width / mouseNumberOfColumns;
  var tileHeight = height / mouseNumberOfRows;

  for (var gridY = 0; gridY < numberOfRows; gridY++) {
    for (var gridX = 0; gridX < numberOfColumns; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      // counter gets incremented with each loop
      // when the counter exceeds the maximum number of columns the counter is reset to 1
      var index = counter % mouseNumberOfColumns;

      // gets the values stored in the arrays at the same index value to create the tile colors
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}

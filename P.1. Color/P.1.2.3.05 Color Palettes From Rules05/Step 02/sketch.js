'use strict';

var colorCount = 20;
var numberOfColumns = 50;
var numberOfRows = 10;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  noLoop();

  //this creates a color palette with varied saturation and brightness
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(180);
      saturationValues[i] = random(50);
      brightnessValues[i] = 100;
    } else {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }
  var tileWidth = width / numberOfColumns;
  var tileHeight = height / numberOfRows;
  // counter increments through the colorCount so that each tile changes color depending on its HSB values
  var counter = 0;

  for (var gridY = 0; gridY < numberOfRows; gridY++) {
    for (var gridX = 0; gridX < numberOfColumns; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      // when the counter exceeds the colorCount number i.e. 20 in this case the counter is reset to 1
      var index = counter % colorCount;
      // the index value increments with each loop to find what HSB values are required for each tile
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(posX, posY, tileWidth, tileHeight);
      //counter incrementing with each loop
      counter++;
    }
  }
}

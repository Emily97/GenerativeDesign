'use strict';

var tileCountX = 50;
var tileCountY = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  // noStroke();
}

function draw() {
  background(0, 0, 100);

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      fill('red');
      rect(posX, posY, tileWidth, tileHeight);
    }
  }
}

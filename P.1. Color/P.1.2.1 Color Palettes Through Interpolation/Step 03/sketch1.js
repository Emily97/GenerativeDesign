'use strict';

var tileCountX = 2;
var tileCountY = 10;
var colorsLeft = []
var colorsRight = [];
//declare a new global variable which will store the colors that have been interpolated so that they can be used for a ase export
var colors = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var startColor = colorsLeft[gridY];
    var endColor = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      interCol = lerpColor(startColor, endColor, amount);
			fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}
//in the shakeColors function, the colors randomness is now restrained to a range of values so that the interpolation and color change isn't chaotic
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 40), random(0, 100), 100);
    colorsRight[i] = color(random(230, 270), 100, random(0, 100));
  }
}
//by clicking the mouse you can change around the colors in the left and right columns which then in turn will cause the interpolation function to interpolate the colors in-between
function mouseReleased() {
  shakeColors();
}
//pressing the key c will save an ase file of the colour Palettes
//this is achieved by using the generative design library which will return an ase swatch from an array of P5 colors
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
}

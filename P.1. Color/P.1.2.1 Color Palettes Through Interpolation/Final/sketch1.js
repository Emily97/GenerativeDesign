'use strict';

var tileCountX = 2;
var tileCountY = 10;
var colorsLeft = []
var colorsRight = [];
var colors = [];
//new variable declared as true
var interpolateBetween = true;

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
      //if statement declares if colorMode is RGB then interpolate using this color colorMode
      //otherwise it will interpolate colors in the HSB colorMode
      if (interpolateBetween) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(startColor, endColor, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(startColor, endColor, amount);
      }

      fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      colors.push(interCol);
    }
  }
}

function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 40), random(0, 100), 100);
    colorsRight[i] = color(random(230, 270), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}
//new key presses have been added to save the canvas as a png
//if you press the 1 key the colorMode changes to RBG
//if you press the 2 key the colorMode changes to HSB
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateBetween = true;
  if (key == '2') interpolateBetween = false;
}

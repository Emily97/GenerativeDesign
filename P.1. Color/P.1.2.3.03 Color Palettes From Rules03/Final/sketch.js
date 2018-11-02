'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
//new variable that will be used by the mouse to switch through different pseudo-random canvas'
var actRandomSeed = 0;
//this determines the alpha value which determines how transparent the colors will be
var alphaValue = 27;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(0);
  //set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.
  randomSeed(actRandomSeed);

  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(220, 290);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 260;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }

  var counter = 0;
  var tileCountY = int(random(5, 30));
  var tileHeight = height / tileCountY;

  for (var gridY = tileCountY; gridY >= 0; gridY--) {
    var numRect = gridY + 1;
    var parts = [];

    for (var i = 0; i < numRect; i++) {
      if (random() < 0.075) {
        var fragments = int(random(2, 20));
        numRect = numRect + fragments;
        for (var ii = 0; ii < fragments; ii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    var totalParts = 0;
    for (var j = 0; j < numRect; j++) {
      totalParts += parts[j];
    }

    var currentParts = 0;
    for (var gridX = 0; gridX < parts.length; gridX++) {
      currentParts += parts[gridX];

      var posX = map(currentParts, 0, totalParts, 0, width);
      var posY = tileHeight * gridY;
      var w = -map(parts[gridX], 0, totalParts, 0, width);
      var h = tileHeight * 1.5;

      var index = counter % colorCount;
      var col1 = color(0);
      var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
      gradient(posX, posY, w, h, col1, col2);

      counter++;
    }
  }
}

// a function called gradient is made to create a linear gradient with the following parameters
function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  // Create a linear gradient
  // The start gradient point is at x, y
  // The end gradient point is at x, y+h
  var grd = ctx.createLinearGradient(x, y, x, y + h);
  //a color stop allows for a start and end color to be determined so that the colors inbetween can be interpolated between the two values
  //grd.addColorStop(x, 'color'); the x value determines where in the in the gradient the color begins. If the value is 0 the color placed
  //will be the starting color, if the value is 0.7 it determines the color at 7 tenths of the gradient. The x value is this example can only be
  //between 0 and 1.
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}
//when the mouse is pressed the canvas will change to a random value between 1 and 100000
//each value between 0 and 100000 has a pattern specific to that number
//i.e. 5 will always look the same even if the canvas is reloaded
function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}

// when a key is pressed this function is called
// when s is pressed the canvas is saved as a png with the file name being the date and time it was captured
// when the c code is pressed the color values of the tiles are saved as an ase file which can be used as a palette in photoshop
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}

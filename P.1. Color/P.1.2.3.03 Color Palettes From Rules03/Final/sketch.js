'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 27;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(0);
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var tileCountY = int(random(5, 30));
  var tileHeight = height / tileCountY;

  // seperate each line in parts
  for (var gridY = tileCountY; gridY >= 0; gridY--) {
    // how many fragments
    var numRect = gridY + 1;
    var parts = [];

    for (var i = 0; i < numRect; i++) {
      // sub fragments or not?
      if (random() < 0.075) {
        // take care of big values
        var fragments = int(random(2, 20));
        numRect = numRect + fragments;
        for (var ii = 0; ii < fragments; ii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var totalParts = 0;
    for (var j = 0; j < numRect; j++) {
      totalParts += parts[j];
    }

    // draw rects
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

function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var grd = ctx.createLinearGradient(x, y, x, y + h);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}

function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}

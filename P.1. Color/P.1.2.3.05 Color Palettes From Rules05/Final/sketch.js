'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
//new variable that will be used by the mouse to switch through different pseudo-random canvas'
var actRandomSeed = 0;
var alphaValue = 100;

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
      hueValues[i] = random(180);
      saturationValues[i] = random(50);
      brightnessValues[i] = 100;
    } else {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
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

      if (random() < 0.45) {
        var w = map(parts[gridX], 0, totalParts, 0, width);
        var h = tileHeight * 1.5
        var px1 = map(currentParts, 0, totalParts, 0, width);
        var px2 = px1 + w;
        var py1 = tileHeight * i;
        var py2 = py1 + h;

        var index = counter % colorCount;
        var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);
        centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
      }

      counter++;
    }
  }
}

function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var cx = x1 + (x2 - x1) / 2;
  var cy = y1 + (y2 - y1) / 2;
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
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

'use strict';
var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
//new variable that will be used by the mouse to switch through different pseudo-random canvas'
var actRandomSeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
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
  var tileCountY = int(random(5,30));
  var tileHeight = height / tileCountY;

  for (var gridY = tileCountY; gridY >= 0; gridY--) {
    var numRect = gridY + 1;
    var parts = [];

    for (var i = 0; i < numRect; i++) {
      if (random() < 0.05) {
        var fragments = int(random(2, 20));
        numRect += fragments;
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
      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(posX, posY, w, tileHeight);

      counter++;
    }
  }
}

function mouseReleased() {
  //when the mouse is pressed the canvas will change to a random value between 1 and 75.
  actRandomSeed = random(75);
  console.log(actRandomSeed);
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

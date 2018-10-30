'use strict';
var colorCount = 20;
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
  // tile count picks an integer value between 5 and 30 to determine how many rows are created
  // tile height determines the height of the tiles depending on the number of rows
  var tileCountY = int(random(5,30));
  var tileHeight = height / tileCountY;

  // seperate each row in parts
  for (var gridY = tileCountY; gridY >= 0; gridY--) {
    // how many rectangles in each row depends on the tileCountY value plus 1.
    // this insures the value of gridY is never a negative value
    var numRect = gridY + 1;
    var parts = [];

    // if random is less than 0.05 create fragments to fill up the parts array
    for (var i = 0; i < numRect; i++) {
        //when random is declared with no value this means that the range of random values inspect
        //between 0 and 1
        //if the random number chosen is less than 0.075 then a random number of fragments are created
        //the random number of fragments is between 2 and 20 and will be an integer
        // we then enter the for loop which pushes random values into the parts array between 0 and 2
        // else if the random value is greater than 0.075 then a random number between 2 and 20 is pushed to the parts array
      if (random() < 0.075) {
        var fragments = int(random(2, 20));
        numRect += fragments;
        for (var ii = 0; ii < fragments; ii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all the parts from the parts array together to get the total
    //the totalParts is equated by adding totalParts to the value that is incremented
    //through the parts array
    var totalParts = 0;
    for (var j = 0; j < numRect; j++) {
      totalParts += parts[j];
    }

    // draw rects for each row depending on the value of the parts array
    var currentParts = 0;
    for (var gridX = 0; gridX < parts.length; gridX++) {

      var posX = map(currentParts, 0, totalParts, 0, width);
      var posY = tileHeight * gridY;
      // the width of the rectangle goes in the negative direction from the posX
      // it doesn't exceed the width of the canvas
      var w = map(parts[gridX], 0, totalParts, 0, width);
      //as the rects are created the counter is incremented with each loop
      //by using the modulas symbol the counter will not exceed colorCount and when it does the index will be reset back to 1
      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(posX, posY, w, tileHeight);
      currentParts += parts[gridX];
      counter++;
    }
  }
}

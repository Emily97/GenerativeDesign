'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var alphaValue = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(0);

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
  // tile count picks an integer value between 5 and 30 to determine how many rows are created
  // tile height determines the height of the tiles depending on the number of rows
  var tileCountY = int(random(5, 30));
  var tileHeight = height / tileCountY;

  // seperate each row in parts
  for (var gridY = tileCountY; gridY >= 0; gridY--) {
    // how many rectangles in each row depends on the tileCountY value plus 1.
    // this insures the value of gridY is never a negative value
    var numRect = gridY + 1;
    var parts = [];

    for (var i = 0; i < numRect; i++) {
        //when random is declared with no value this means that the range of random values inspect
        //between 0 and 1
        //if the random number chosen is less than 0.075 then a random number of fragments are created
        //the random number of fragments is between 2 and 20 and will be an integer
        // we then enter the for loop which pushes random values into the parts array between 0 and 2
        // else if the random value is greater than 0.075 then a random number between 2 and 20 is pushed to the parts array
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
      currentParts += parts[gridX];

      //if the random number is less than 0.45 with the range going between 0 and 1
      //create the following rectangles
      if (random() < 0.45) {
        //the starting position of the x value is determined by the value of the gridX which is incremented with each loop
        var w = map(parts[gridX], 0, totalParts, 0, width);
        //the overlapping is created by increasing the tileHeight by 50 per cent
        var h = tileHeight * 1.5;
        //takes the value from the variable currentParts to determine the first x position
        var px1 = map(currentParts, 0, totalParts, 0, width);
        var px2 = px1 + w;
        var py1 = tileHeight * i;
        var py2 = py1 + h;

        var index = counter % colorCount;
        var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        // create complementary color
        // the hue value is subtracted by 180 to gain a new hue that will complement the index color of the first color, the saturation and brightness
        // will remain the same
        var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);
        centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
      }

      counter++;
    }
  }
}
// this function can be used for creating circles with a radial gradient
//however in this example we are using it to create a radial gradient for a rectangle
function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var cx = x1 + (x2 - x1) / 2; //the centre of the circles x coordinates
  var cy = y1 + (y2 - y1) / 2; //the centre of the circles y coordinates
  //method is specified by six parameters, three defining the gradient's start circle, and three defining the end circle
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  //a color stop allows for a start and end color to be determined so that the colors inbetween can be interpolated between the two values
  //grd.addColorStop(x, 'color'); the x value determines where in the in the gradient the color begins. If the value is 0 the color placed
  //will be the starting color, if the value is 0.7 it determines the color at 7 tenths of the gradient. The x value is this example can only be
  //between 0 and 1.
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
    //by taking x1 and y1 away from x2 and y2 respectively the size of the rectangles is determined
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

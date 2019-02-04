'use strict';
var numberOfColumns = 10;
var numberOfRows = 10;
var maxCircle = 75;
var minCircle = 10;
var minStroke = 1;
var maxStroke = 5;
var strokeColor;
var actRandomSeed = 5;

function setup() {
  createCanvas(500, 500);
  strokeColor = color(137, 143, 153,125);
}

function draw() {
  randomSeed(actRandomSeed);
  background(255);
  var tileWidth = width / numberOfColumns;
  var tileHeight = height / numberOfRows;
  var size = map(constrain(mouseX,0,width), 0,width,minCircle,maxCircle);
  var ellipseStroke = map(constrain(mouseY,0,height),0,height,minStroke,maxStroke);

  translate(tileWidth/2,tileWidth/2);
  for (var gridY = 0; gridY < numberOfRows; gridY++) {
    for (var gridX = 0; gridX < numberOfColumns; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      noFill();
      stroke(strokeColor);
      strokeWeight(ellipseStroke);
      var shiftX = random(-mouseX,mouseX)/10;
      var shiftY = random(-mouseY,mouseY)/10;
      ellipse(posX + shiftX, posY + shiftY, size, size);
    }
  }
}

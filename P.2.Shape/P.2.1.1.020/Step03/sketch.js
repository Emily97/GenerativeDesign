'use strict';
var numberOfColumns = 10;
var numberOfRows = 10;
var maxCircle = 75;
var minCircle = 10;
var minStroke = 1;
var maxStroke = 5;
var strokeColor;
var fillColorCircleOne;
var fillColorCircleTwo;
var actRandomSeed = 5;
var mySlider;

function setup() {
  createCanvas(500, 500);

  mySlider = createSlider(10,100,20);
  mySlider.position(width,height);
  mySlider.style('width','180px');

  fillColorCircleOne = color(137, 143, 153,125);
  fillColorCircleTwo = color(74, 238, 247,125);
}

function draw() {
  randomSeed(actRandomSeed);
  background(255);
  var tileWidth = width / numberOfColumns;
  var tileHeight = height / numberOfRows;
  numberOfColumns = mySlider.value();
  var ellipseStroke = map(constrain(mouseY,0,height),0,height,minStroke,maxStroke);
  var biggerCircle = 20;
  var smallCircle = 10;

  translate(tileWidth/2,tileWidth/2);
  for (var gridY = 0; gridY < numberOfRows; gridY++) {
    for (var gridX = 0; gridX < numberOfColumns; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var shiftX = random(-mouseX,mouseX)/10;
      var shiftY = random(-mouseY,mouseY)/10;
      fill(fillColorCircleOne);
      ellipse(posX + shiftX, posY + shiftY, biggerCircle, biggerCircle);
    }
  }
  for (var gridY = 0; gridY < numberOfRows; gridY++) {
    for (var gridX = 0; gridX < numberOfColumns; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      noStroke();
      fill(fillColorCircleTwo);
      ellipse(posX, posY, smallCircle, smallCircle);
    }
  }
}

function mousePressed(){
  actRandomSeed = random(100000);
}

function keyPressed(){
  if(key =='s' || key == 'S')saveCanvas(gd.timestamp(),'png');
}

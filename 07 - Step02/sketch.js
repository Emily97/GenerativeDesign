
'use strict';
var img;
var colors = [];
function preload() {
  img = loadImage('data/pic1.jpg');
}
function setup() {
    createCanvas(500, 500);
    noCursor();
    noStroke();
    noLoop();
}

function draw() {
  //Define your number of tiles
  var tileCount = 20;

  //And then the width of each tile
  var rectSize = width / tileCount;

  img.loadPixels();

  //We make sure to empty our colors array each time
  //the draw function occurs
  colors = [];

//If our images is 400px and high and our file count is 20
//which will mean our file width is also 20px. We will want to grab the colours
//at 0,20,40,60.... and store them
  for (var gridY = 0; gridY < tileCount; gridY++) {
    //for each gridX value we need to work out a colours
    //to be stored
    for (var gridX = 0; gridX < tileCount; gridX++) {
      //we work out the pixel value in the x and y
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);

      //we then convert this to the appropraite index value in the pixels array
      var i = (py * img.width + px) * 4;
      //we then create a color object
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  console.log(colors);
}

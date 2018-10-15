
'use strict';
var img;
var colors = [];
function preload() {
  img = loadImage('data/pic1.jpg');
}
function setup() {
    createCanvas(600, 600);
    noCursor();
    noStroke();
    // noLoop();
}

function draw() {
  var tileCount = floor(width/max(mouseX, 5));
  var rectSize = width / tileCount;

  img.loadPixels();
  colors = [];
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  //Finally we draw these colors out using the colors array
  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }

  console.log(colors);
}

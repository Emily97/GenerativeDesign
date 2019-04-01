
'use strict';
var img;
function preload() {
  //loads an image from a path and creates a p5.Image from it.
  img = loadImage('data/pic1.jpg');
}
function setup() {
    createCanvas(500, 500);
    noCursor();
    noStroke();

    //Useful function, to stop a for loop effect on draw function
    noLoop();
}

function draw() {
  //loads the pixels data for this image into the [pixels] attributes
  img.loadPixels();


  console.log(img);
}

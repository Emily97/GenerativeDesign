
'use strict';
var img;
function preload() {
  img = loadImage('data/pic1.jpg');
}
function setup() {
    createCanvas(500, 500);
}

function draw() {
  img.loadPixels();
}

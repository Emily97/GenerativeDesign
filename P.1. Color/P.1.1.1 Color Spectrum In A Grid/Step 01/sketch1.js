'use strict';
function setup(){
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw(){
    fill('red');
    // Putting one rectangle on the screen.
    rect(0,0,100,100);
}

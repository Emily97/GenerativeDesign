
'use strict';

var colorLeft = [];
var colorRight = [];
var tileCountX = 5;
var tileCountY = 5;


function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
    noStroke();
    shakeColor();
}

function draw() {
    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;

    var interCol;

    for(var gridY = 0; gridY < tileCountY; gridY++) {
        for(var gridX = 0; gridX < tileCountX; gridX++) {

            var amount = map(gridX, 0, tileCountX -1, 0, 1);
            var startColor = colorLeft[gridY];
            var endColor = colorRight[gridY];

            fill(lerpColor(startColor, endColor, amount));

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            rect(posX,posY,tileWidth,tileHeight);
        }
    }
}

function shakeColor() {
    for(var i = 0; i < tileCountX; i++) {
        var randomColor = color(floor(random(0,255)), floor(random(0,255)), floor(random(0,255)));
        var randomColor1 = color(floor(random(0,255)), floor(random(0,255)), floor(random(0,255)));
        colorLeft.push(randomColor);
        colorRight.push(randomColor1);
    }

}

//colorLeft[floor(random(0,colorLeft.length))]

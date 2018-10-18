'use strict';
//declare two arrays that will fill the left and right most columns with colors, though currently they will be empty
var colorLeft = [];
var colorRight = [];

var numberOfRows = 10;
var numberOfColumns = 10;
var tileWidth;
var tileHeight;


function setup() {

	createCanvas(600, 600);
	colorMode(HSB);
	noStroke();
	shakeColor();

}

function draw(){
  tileWidth = width/numberOfColumns;
  tileHeight = height/numberOfRows;

	for(var gridY = 0; gridY < numberOfColumns; gridY++){
    //these variables store the colors for the left and right columns
    var startColor = colorLeft[gridY];
    var endColor = colorRight[gridY];
		for(var gridX = 0; gridX < numberOfRows; gridX++){
      //the colors found in-between the leftmost columns and the rightmost column are calculated with lerpColor()
      //lerpColor() performs the Interpolation between the two values startColor and endColor
      //amount specifies the startColor and endColor position in this case the first color will be 0.0 whereas the fifth color will be 0.5
			var amount = map(gridX, 0, 10, 0, 1);
			var interCol = lerpColor(startColor, endColor, amount);
			fill(interCol);

			rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight);
		}
	}


}
//shakeColors is a function that is declared in the setup
// this function creates a random color for the start and end of each row which is then interpolated by lerpColor to interpolate the other colours in-between.
function shakeColor() {
	for (var i = 0; i < numberOfRows; i++){
		colorLeft[i] = color(random(255), random(255), random(255)); //generating 10 random colours
		colorRight[i] = color(random(255), random(255), random(255)); //generating 10 random colours
	}

}

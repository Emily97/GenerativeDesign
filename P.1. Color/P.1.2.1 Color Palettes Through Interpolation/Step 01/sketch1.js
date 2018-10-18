'use strict';

//declaring global variables
//rows and columns are set to 10 until integration of mouseX and mouseY
var numberOfRows = 10;
var numberOfColumns = 10;
var tileWidth;
var tileHeight;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB);
	//noStroke();

}

function draw(){
  //tiles width and height are calculated by dividing into numberOfColumns and numberOfRows respectively
  tileWidth = width/numberOfColumns;
  tileHeight = height/numberOfRows;

  //using a loop to create rows and columns of tiles all preset to color red
	for(var gridY = 0; gridY < numberOfColumns; gridY++){
		for(var gridX = 0; gridX < numberOfRows; gridX++){
			fill('red');
			rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight);
		}
	}


}

# [ Color ](P.1. Color/)

## Step One
```js
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
```

## Step Two
```js
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

			var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);
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

```

## Step Three
```js
'use strict';

var tileCountX = 2;
var tileCountY = 10;
var colorsLeft = []
var colorsRight = [];
//declare a new global variable which will store the colors that have been interpolated so that they can be used for a ase export
var colors = [];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var startColor = colorsLeft[gridY];
    var endColor = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      interCol = lerpColor(startColor, endColor, amount);
			fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}
//in the shakeColors function, the colors randomness is now restrained to a range of values so that the interpolation and color change isn't chaotic
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 40), random(0, 100), 100);
    colorsRight[i] = color(random(230, 270), 100, random(0, 100));
  }
}
//by clicking the mouse you can change around the colors in the left and right columns which then in turn will cause the interpolation function to interpolate the colors in-between
function mouseReleased() {
  shakeColors();
}
//pressing the key c will save an ase file of the colour Palettes
//this is achieved by using the generative design library which will return an ase swatch from an array of P5 colors
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
}

```

## Final
```js
'use strict';

var tileCountX = 2;
var tileCountY = 10;
var colorsLeft = []
var colorsRight = [];
var colors = [];
//new variable declared as true
var interpolateBetween = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    var startColor = colorsLeft[gridY];
    var endColor = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);
      //if statement declares if colorMode is RGB then interpolate using this color colorMode
      //otherwise it will interpolate colors in the HSB colorMode
      if (interpolateBetween) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(startColor, endColor, amount);
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(startColor, endColor, amount);
      }

      fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      colors.push(interCol);
    }
  }
}

function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 40), random(0, 100), 100);
    colorsRight[i] = color(random(230, 270), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}
//new key presses have been added to save the canvas as a png
//if you press the 1 key the colorMode changes to RBG
//if you press the 2 key the colorMode changes to HSB
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateBetween = true;
  if (key == '2') interpolateBetween = false;
}
```

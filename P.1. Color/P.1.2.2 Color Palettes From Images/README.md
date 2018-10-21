## Step One
```js

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


  console.log(img.loadPixels());
}
```

## Step Two
```js

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
```

## Step Three
```js

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
```

## Final
```js

'use strict';
var img;
var colors = [];
//we add in a sortMode variable to store which sort mode we want to use
var sortMode = null;

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
  var tileCount = floor(width / max(mouseX, 5));
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
  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}
//and we also add some key features
function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') img = loadImage('data/pic1.jpg');
  if (key == '2') img = loadImage('data/pic2.jpg');
  if (key == '3') img = loadImage('data/pic3.jpg');
  if (key == '4') img = loadImage('data/pic4.jpg');

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
```

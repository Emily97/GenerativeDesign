## Step One
```js
'use strict';
function setup(){
    createCanvas(800,400);
    // The range of values for saturation and brightness are adjusted in such a way that mouse coordinates can be taken as their values.
    colorMode(HSB, 360, 100, 100);
    noLoop();
}

function draw(){
  // Using the beginShape() and endShape() functions allow creating more complex forms.
  // The TRIANGLE_FAN is requiredd to make a circle.
  // To start the TRIANGLE_FAN must have a starting position which is the centre and the vertexs are
  // then made to create the shape. When the endShape function is declared it stops the creation of vertexes
  beginShape(TRIANGLE_FAN);
    vertex(57.5, 50);
    vertex(57.5, 15);
    vertex(92, 50);
    vertex(57.5, 85);
    vertex(22, 50);
    vertex(57.5, 15);
  endShape();
}
```

## Step Two
```js
'use strict';
var segmentCount = 360;
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, 100, 100);
}

function draw(){
  background('violet');
  // the angle increment step depends on how many segments are to be drawn below
  // in this case because later we will be filling a circle of 360 degrees we will make 360 segments.
  var step = 360/segmentCount;
  // the radius of the circle must be half the height of the canvas otherwise the circle would not fit.
  var radius = height/2;

  beginShape(TRIANGLE_FAN);
    // the first vertex point (v1) is in the centre of the canvas
    vertex(width/2,height/2);
    // for the other vertices (v2, v3 .....), angle has to be converted from degrees(0-360) to radians(0-2π) because the functions sin() and cos() require radians and not degrees.
    for(var angle = 0; angle <= 90; angle += step) {
        var vx = radius * cos(radians(angle)) + width/2;
        var vy = radius * sin(radians(angle)) + height/2;
        // the values from finding the cos and sin of the angles is then placed in the this vertex method.
        vertex(vx,vy);
        fill(100,100,100);
    }
  endShape();
}
```

## Step Three
```js
'use strict';
var segmentCount = 360;
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, width, height);
    noStroke();
}

function draw(){
  background('violet');
  var step = 360/segmentCount;
  var radius = height/2;

  beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    // increase the range between 0 to 360 for the angle.
    // have the saturation and brightness be effected by the mouses x or y-value.
    for(var angle = 0; angle <= 360; angle += step) {
        var vx = radius * cos(radians(angle)) + width/2;
        var vy = radius * sin(radians(angle)) + height/2;
        vertex(vx,vy);
        fill(angle,mouseX,mouseY);
    }
  endShape();
}
```

## Final
```js
'use strict';
var segmentCount = 360;
function setup(){
    createCanvas(800,400);
    colorMode(HSB, 360, width, height);
    noStroke();
}

function draw(){
  background('violet');
  var step = 360/segmentCount;
  var radius = height/2;

  beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    for(var angle = 0; angle <= 360; angle += step) {
        var vx = radius * cos(radians(angle)) + width/2;
        var vy = radius * sin(radians(angle)) + height/2;
        vertex(vx,vy);
        fill(angle,mouseX,mouseY);
    }
  endShape();
}

function keyPressed(){
// if the s key is pressed the canvas is saved as a png, the file will be named by using a timestamp method found in the generative design library
  if(key == 's' || key == 'S') saveCanvas(gd.timestamp(),'png');

// the switch() command checks the last key pressed, which then switches easily between the keys to increase or decrease the number of segments.
  switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
    }
}
```

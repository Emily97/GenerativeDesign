# Color > Hello,Color

## Step One

- [ Step One Code](Step 01/)

```js
// The setup function is called once when the program starts. It initializes the canvas properties such as canvas size, colorMode etc.
function setup(){
    // defines the size of the canvas in pixels, in the browser window.
    createCanvas(720,720);
}

// Unlike the setup function, the draw function constantly executes all the lines of code found within it.
function draw(){
    // This determine the background color of the canvas.
    background(100,100,100);
    // Because this is placed before the rect() method, the fill of the rectangle is determined by this line.
    fill(200,100,100);
    // The first two values are the starting point of the rectangle on the x and y axis. The final two values are the width in the x direction and the length in the y direction.
    rect(200,200,200,200);
}
```

## Step Two

- [ Step Two Code](Step 02/)

```js
function setup(){
    createCanvas(720,720);
    // changes the color value to HSB rather than RGB.
    // The 3 values indicated determine the range for the Hue, Saturation and Brightness.
    // In this case the Hue range is from 0 - 360.
    colorMode(HSB, 360, 100, 100);
    // This removes the black stroke currently placed on the rectangle.
    noStroke();
}

function draw(){
    // The background color is now set to change color depending on the mouses Y position on the canvas.
    // The saturation and brightness or set to their max range.
    background(mouseY/2,100,100);
    fill(200,100,100);
    rect(200,200,200,200);
}
```

## Step Three
```js
function setup(){
    createCanvas(720,720);
    colorMode(HSB, 360, 100, 100);
    //this places the rectangle in the centre of the canvas.
    //interprets the first two parameters of rect() as the shape's center point, while the third and fourth parameters are its width and height.
    rectMode(CENTER);
    noStroke();
}

function draw(){
    background(mouseY/2,100,100);
    // The halved y-value of the mouse position is subtracted from 360, creating values from 360 to 0.
    fill(360-mouseY/2,100,100);
    //starts at the middle of the canvas in both the x and y direction and grows bigger and smaller depending on the mouses X position on the canvas.
    rect(width/2,height/2,mouseX,mouseX);
}
```

## Final
```js
function setup(){
    createCanvas(720,720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
    noStroke();
}

function draw(){
    background(mouseY/2,100,100);
    fill(360-mouseY/2,100,100);
    rect(width/2,height/2,mouseX,mouseX);
}
// The keyPressed() function is called once every time a key is pressed.
// In this case everytime the s key is pressed the canvas is saved as a png with the file name being created using the date and time
// as well as the mouses x and y position. This is done using timestamp() which is taken from the generative design library.
function keyPressed(){
    if(key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
}

```

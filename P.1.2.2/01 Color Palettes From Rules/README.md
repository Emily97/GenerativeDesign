# 01 Color Palettes From Rules

## Code explained
```js
function preload() {
  img = loadImage('data/pic1.jpg');
}
```
This loads an image from a path and creates a p5.Image from it.

```js
noLoop();
```
Useful function, to stop a for loop effect on draw function

```js
function draw() {
  //loads the pixels data for this image into the [pixels] attributes
  img.loadPixels();
}
This loads the pixels data for this image into the [pixels] attributes

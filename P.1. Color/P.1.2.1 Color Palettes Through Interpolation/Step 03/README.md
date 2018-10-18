# 03 Color Palettes Through Interpolation

## Code Explained

```js
var colors = [];
```
Declare a new global variable which will store the colors that have been interpolated so that they can be used for a ase export.

```js
colors.push(interCol);
```
Save color for potential ase export.

```js
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 40), random(0, 100), 100);
    colorsRight[i] = color(random(230, 270), 100, random(0, 100));
  }
}
```
In the shakeColors function, the colors randomness is now restrained to a range of values so that the interpolation and color change isn't chaotic.

```js
function mouseReleased() {
  shakeColors();
}
```
By clicking the mouse you can change around the colors in the left and right columns which then in turn will cause the interpolation function to interpolate the colors in-between.

```js
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
}
```
Pressing the key c will save an ase file of the colour Palettes. This is achieved by using the generative design library which will return an ase swatch from an array of P5 colors.

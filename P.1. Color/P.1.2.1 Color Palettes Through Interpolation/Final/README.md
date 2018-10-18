# Final Color Palettes Through Interpolation

## Code Explained
```js
var interpolateBetween = true;
```
New variable declared as true.

```js
if (interpolateBetween) {
  // switch to rgb
  colorMode(RGB);
  interCol = lerpColor(startColor, endColor, amount);
  // switch back
  colorMode(HSB);
} else {
  interCol = lerpColor(startColor, endColor, amount);
}
```
If statement declares if colorMode is RGB then interpolate using this color colorMode otherwise it will interpolate colors in the HSB colorMode.

```js
function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode( colors )], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') interpolateBetween = true;
  if (key == '2') interpolateBetween = false;
}
```
New key presses have been added to save the canvas as a png, if you press the 1 key the colorMode changes to RBG and if you press the 2 key the colorMode changes to HSB.

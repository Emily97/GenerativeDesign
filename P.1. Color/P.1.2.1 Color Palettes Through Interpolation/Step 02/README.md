# 02 Color Palettes Through Interpolation

## Code Explained
```js
var colorLeft = [];
var colorRight = [];
```
Declare two arrays that will fill the left and right most columns with colors, though currently they will be empty.

```js
var startColor = colorLeft[gridY];
var endColor = colorRight[gridY];
```
These variables store the colors for the left and right columns

```js
var amount = map(gridX, 0, 10, 0, 1);
var interCol = lerpColor(startColor, endColor, amount);
fill(interCol);
```
The colors found in-between the leftmost columns and the rightmost column are calculated with lerpColor(). lerpColor() performs the Interpolation between the two values startColor and endColor. Amount specifies the startColor and endColor position. In this case the first color will be 0.0 whereas the fifth color will be 0.5.

```js
function shakeColor() {
	for (var i = 0; i < numberOfRows; i++){
		colorLeft[i] = color(random(255), random(255), random(255)); //generating 10 random colours
		colorRight[i] = color(random(255), random(255), random(255)); //generating 10 random colours
	}
``
ShakeColors is a function that is declared in the setup. This function creates a random color for the start and end of each row which is then interpolated by lerpColor to interpolate the other colours in-between.

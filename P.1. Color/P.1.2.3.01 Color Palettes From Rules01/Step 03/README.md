# 03 Color Palettes From Rules 01

## Code Explained
```js
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
```
Declaring global variables that are empty arrays that will be filled with values of Hue, Saturation and Brightness.

```js
for (var i = 0; i < numberOfColumns; i++) {
  hueValues[i] = random(360);
  saturationValues[i] = random(100);
  brightnessValues[i] = random(100);
}
```
Initializing random values for each column tile which will later generate different color tiles.

```js
var index = counter % mouseNumberOfColumns;
```
Counter gets incremented with each loop. When the counter exceeds the maximum number of columns the counter is reset to 1.

```js
fill(hueValues[index], saturationValues[index], brightnessValues[index]);
```
Gets the values stored in the arrays at the same index value to create the tile colors.

# 03 Color Palettes From Rules 02

## Code Explained
```js
var tileCountY = int(random(5,30));
var tileHeight = height / tileCountY;
```
Tile count picks an integer value between 5 and 30 to determine how many rows are created. Tile height determines the height of the tiles depending on the number of rows.

```js
for (var gridY = tileCountY; gridY >= 0; gridY--) {
  var numRect = gridY + 1;
  var parts = [];
}
```
Seperate each row in parts. How many rectangles in each row depends on the tileCountY value plus 1.

```js
for (var i = 0; i < numRect; i++) {
  if (random() < 0.075) {
    var fragments = int(random(2, 20));
    numRect += fragments;
    for (var ii = 0; ii < fragments; ii++) {
      parts.push(random(2));
    }
  } else {
    parts.push(random(2, 20));
  }
}
```
When random is declared with no value this means that the range of random values inspect between 0 and 1. If the random number chosen is less than 0.075 then a random number of fragments are created. The random number of fragments is between 2 and 20 and will be an integer. We then enter the for loop which pushes random values into the parts array between 0 and 2. Else if the random value is greater than 0.075 then a random number between 2 and 20 is pushed to the parts array.

```js
var totalParts = 0;
for (var j = 0; j < numRect; j++) {
  totalParts += parts[j];
}
```
Add all the parts from the parts array together to get the total. The totalParts is equated by adding totalParts to the value that is incremented through the parts array.

```js
var currentParts = 0;
for (var gridX = 0; gridX < parts.length; gridX++) {
  currentParts += parts[gridX];
}
```
Draw rects for each row depending on the value of the parts array.

```js
var w = map(parts[gridX], 0, totalParts, 0, width);
```
The starting position of the x value is determined by the value of the gridX which is incremented with each loop.

```js
var index = counter % colorCount;
```
As the rects are created the counter is incremented with each loop by using the modulas symbol the counter will not exceed colorCount and when it does the index will be reset back to 1.

```js
var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
```
The index value influences what the color of each pixel will be.

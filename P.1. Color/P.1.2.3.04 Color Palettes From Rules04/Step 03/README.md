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
  if (random() < 0.05) {
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
If random is less than 0.05 create fragments to fill up the parts array.

```js
var totalParts = 0;
for (var j = 0; j < numRect; j++) {
  totalParts += parts[j];
}
```
Add all the parts from the parts array together to get the total

```js
var currentParts = 0;
for (var gridX = 0; gridX < parts.length; gridX++) {
  currentParts += parts[gridX];
}
```
Draw rects for each row depending on the value of the parts array.

```js
var w = -map(parts[gridX], 0, totalParts, 0, width);
```
The width of the rectangle goes in the negative direction from the posX. It doesn't exceed the width of the canvas.

# 02 Color Palettes From Rules 01

## Code Explained
```js
var mX = constrain(mouseX, 0, width);
var mY = constrain(mouseY, 0, height);
```
Limit mouse coordinates to the canvas.

```js
var mouseNumberOfColumns = int(map(mX, 0, width, 1, numberOfColumns));
var mouseNumberOfRows = int(map(mY, 0, height, 1, numberOfRows));
```
Mapping the range of values for number of columns and rows on screen. In this case the max number of columns generated is 50.

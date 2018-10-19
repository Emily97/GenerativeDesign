# 01 Color Palettes From Rules 01

## Code Explained
```js
var numberOfColumns = 50;
var numberOfRows = 10;
```
Declaration of global variables that determine the number of tiles in the x and y direction.

```js
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
}
```
The canvas is created to fit the browser window.

```js
var tileWidth = width / numberOfColumns;
var tileHeight = height / numberOfRows;
```
Tiles width and height are calculated by dividing into numberOfColumns and numberOfRows respectively.

```js
for (var gridY = 0; gridY < numberOfRows; gridY++) {
  for (var gridX = 0; gridX < numberOfColumns; gridX++) {
    var posX = tileWidth * gridX;
    var posY = tileHeight * gridY;
    fill('red');
    rect(posX, posY, tileWidth, tileHeight);
  }
}
```
Using a loop to create rows and columns of tiles all preset to color red.

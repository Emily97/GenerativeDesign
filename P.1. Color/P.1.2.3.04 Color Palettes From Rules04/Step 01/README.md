# 01 Color Palettes From Rules 04

## Code Explained
```js
var numberOfColumns = 50;
var numberOfRows = 10;
```
Declaring global values that determine the number of columns or rows.

```js
createCanvas(windowWidth, windowHeight);
```
The canvas is the size of the browser window

```js
var tileWidth = width / numberOfColumns;
var tileHeight = height / numberOfRows;
```
Tiles width and height are calculated by dividing into numberOfColumns and numberOfRows.

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

# 01 Color Palettes Through Interpolation

## Code Explained
```js
var numberOfRows = 10;
var numberOfColumns = 10;
var tileWidth;
var tileHeight;
```
Declaring global variables. Rows and columns are set to 10 until integration of mouseX and mouseY.

```js
tileWidth = width/numberOfColumns;
tileHeight = height/numberOfRows;
```
Tiles width and height are calculated by dividing into numberOfColumns and numberOfRows respectively.

```js
for(var gridY = 0; gridY < numberOfColumns; gridY++){
  for(var gridX = 0; gridX < numberOfRows; gridX++){
    fill('red');
    rect(gridX*tileWidth, gridY*tileHeight, tileWidth, tileHeight);
  }
}
```
Using a loop to create rows and columns of tiles all preset to color red.

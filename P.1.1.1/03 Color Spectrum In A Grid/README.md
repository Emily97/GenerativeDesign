# 03 Color Spectrum In A Grid

## Code Explained
```js
var stepX = 50;
var stepY = 50;
```
Declare a variable that will increment in the for loop.

```js
for(var gridY = 0; gridY < height; gridY += stepY){
for(var gridX = 0; gridX < width; gridX += stepX){
  fill('red');
  rect(gridX,gridY,stepX,stepY);
}
}
```
Rows and columns of squares are created using a nested loop that increments by 50 pixels in the x and y direction. 

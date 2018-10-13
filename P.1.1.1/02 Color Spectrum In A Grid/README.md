# 02 Color Spectrum In A Grid

## Code Explained
```js
for(var gridX = 0; gridX < width; gridX += 50){
  fill('red');
  rect(gridX,0,100,100);
}
```
A loop is now used to create 10 rectangles across the screen. We use gridX to determine the starting point of the rectangle on the x axis. This is incremented by 50 pixels each loop until it reaches the edge of the canvas.

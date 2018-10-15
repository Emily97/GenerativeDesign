# 03 Color Palettes From Rules

## Code Explained
Comment out  the noLoop() in the setup function to allow the draw function to refresh constantly.

```js
var i = 0;
for (var gridY = 0; gridY < tileCount; gridY++) {
  for (var gridX = 0; gridX < tileCount; gridX++) {
    fill(colors[i]);
    rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
    i++;
  }
}
```
Finally we draw these colors out using the colors array.

# 02 Color Palettes From Rules

## Code explained
```js
  var tileCount = 20;
 ```
 Define your number of tiles.

 ```js
 var rectSize = width / tileCount;
 ```
Now the width of each tile.

```js
colors = [];
```
We make sure to empty our colors array each time the draw function occurs.

```js
  for (var gridY = 0; gridY < tileCount; gridY++) {}
```
If our images is 400px and high and our file count is 20, which will mean our file width is also 20px. We will want to grab the colours at 0,20,40,60.... and store them.

```js
for (var gridX = 0; gridX < tileCount; gridX++) {}
```
For each gridX value we need to work out a colours to be stored.

```js
var px = int(gridX * rectSize);
var py = int(gridY * rectSize);
```
We work out the pixel value in the x and y.

```js
var i = (py * img.width + px) * 4;
```
We then convert this to the appropriate index value in the pixels array.

```js
var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
```
We then create a color object. RGBA or HSBA.

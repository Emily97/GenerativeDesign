# 02 Color Palettes From Rules 02

## Code Explained
```js
for (var i = 0; i < colorCount; i++) {
  if (i % 2 == 0) {
    hueValues[i] = random(220, 290);
    saturationValues[i] = 100;
    brightnessValues[i] = random(15, 100);
  } else {
    hueValues[i] = 260;
    saturationValues[i] = random(20, 100);
    brightnessValues[i] = 100;
  }
}
```
This creates a color palette from blue to violet with varied saturation and brightness.

```js
var counter = 0;
```
Counter increments through the colorCount so that each tile changes color depending on its HSB values.

```js
var index = counter % colorCount;
```
When the counter exceeds the colorCount number i.e. 20 in this case the counter is reset to 1.

```js
var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
fill(col);
```
The index value increments with each loop to find what HSB values are required for each tile.

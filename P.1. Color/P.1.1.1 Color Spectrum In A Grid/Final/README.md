# Final Color Spectrum In A Grid

## Code Explained
```js
colorMode(HSB, width, height, 100);
```
The value range for hue and saturation is set at 500 using the command colorMode().Hue is no longer defined as a number between 0 and 360. The same is true of the saturation value in this case.

```js
noStroke();
```
We add the noStroke() method so we can see the transition between the low to high range of saturation more clearly.

```js
var scale = width/20;
var stepX = mouseX/scale + 2;
var stepY = mouseY/scale + 2;
```
StepX and stepY now increment depending on the mouses x and y position. By dividing mouseX and mouseY by 5 were are scaling the canvas so that instead of there being 500 steps there is now only 25. This reduces the chance of longer loading speeds. By adding 2 to the stepX and Y we reduce the chance of the value being too small which cause the page to freeze.

```js
fill(gridX,height - gridY,100);
```
Now we use the gridX variable as it increments to change the Hue. By taking gridY away from height we can see the colors we the highest saturation at the top of the canvas and the lowest saturation at the base of the canvas.

# Final Color Spectrum In A Grid

## Code Explained
```js
colorMode(HSB, width, height, 100);
```
The range for the Hue and Saturation are set to the width and height of the canvas this means the range of values for Hue and Saturation in this case is 0 - 500.

```js
noStroke();
```
We add the noStroke() method so we can see the transition between the low to high range of saturation more clearly.

```js
var stepX = mouseX/5 + 1;
var stepY = mouseY/5 + 1;
```
StepX and stepY now increment depending on the mouses x and y position. By dividing mouseX and mouseY by 5 were are scaling the canvas so that instead of there being 500 steps there is now only 100. This increases the speed of the browser compared to if we didn't scale the steps with regards to the canvas.

```js
fill(gridX,height - gridY,100);
```
Now we use the gridX variable as it increments to change the Hue. By taking gridY away from height we can see the colors we the highest saturation at the top of the canvas and the lowest saturation at the base of the canvas.

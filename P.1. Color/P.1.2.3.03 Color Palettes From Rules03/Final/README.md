# Final Color Palettes From Rules 03
```js
var actRandomSeed = 0;
```
New variable that will be used by the mouse to switch through different pseudo-random canvas'.

```js
var alphaValue = 27;
```
This determines the alpha value which determines how transparent the colors will be.

```js
randomSeed(actRandomSeed);
```
Set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.

```js
function gradient(x, y, w, h, c1, c2) {
  var ctx = drawingContext;
  var grd = ctx.createLinearGradient(x, y, x, y + h);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}
```
A function called gradient is made to create a linear gradient with the following parameters x, y, w, h, c1 and c2.

The start gradient point is at x, y.
The end gradient point is at x, y+h.

A color stop allows for a start and end color to be determined so that the colors inbetween can be interpolated between the two values.
### Example
grd.addColorStop(x, 'color'); the x value determines where in the in the gradient the color begins. If the value is 0 the color placed will be the starting color, if the value is 0.7 it determines the color at 7 tenths of the gradient. The x value in this example can only be between 0 and 1.

```js
function mouseReleased() {
  actRandomSeed = random(100000);
  console.log(actRandomSeed);
  loop();
}
```
When the mouse is pressed the canvas will change to a random value between 1 and 100000. Each value between 0 and 100000 has a pattern specific to that number i.e. 5 will always look the same even if the canvas is reloaded.

```js
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
```
When a key is pressed this function is called. When s is pressed the canvas is saved as a png with the file name being the date and time it was captured. When the c code is pressed the color values of the tiles are saved as an ase file which can be used as a palette in photoshop.

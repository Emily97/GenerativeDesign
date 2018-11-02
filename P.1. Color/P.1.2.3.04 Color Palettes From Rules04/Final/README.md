# Final Color Palettes From Rules 04
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
if(random() < 0.45) {
    var posX = map(currentParts, 0, totalParts, 0, width);
    var posY = tileHeight * gridY;
    var w = map(parts[gridX], 0, totalParts, 0, width);
    var h = tileHeight * 1.5;

    var index = counter % colorCount;
    var col1 = color(0);
    var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
    currentParts += parts[gridX];
    gradient(posX, posY, w, h, col1, col2);
}
```
If the random number is less than 0.45 with the range going between 0 and 1, create the following rectangles. This creates rectangles that will overlap which you can see as the alpha value is 27. The overlapping is created by increasing the tileHeight by 50 per cent. 

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

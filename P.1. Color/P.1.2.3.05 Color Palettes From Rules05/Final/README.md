# Final Color Palettes From Rules 05
```js
var actRandomSeed = 0;
```
New variable that will be used by the mouse to switch through different pseudo-random canvas'.

```js
randomSeed(actRandomSeed);
```
Set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.

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

# Final Color Palettes From Rules 01

## Code Explained
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

```js
// red to orange hues
if (key == '1') {
  for (var i = 0; i < numberOfColumns; i++) {
    hueValues[i] = random(1,50);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}
```
These key presses change the HSB values depending on what is specified for each value under each key.
![Example: Red to Orange](examples/181019_215746_257.png?raw=true "Example: Red to Orange")

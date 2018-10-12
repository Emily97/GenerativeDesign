# Final Color Palettes From Rules

##Code Explained
```js
var sortMode = null;
```
We add in a sortMode variable to store which sort mode we want to use.

```js
  gd.sortColors(colors, sortMode);
```
Referencing a method from the generative design library that sorts colors depending on in this case their hue, saturation, brightness or grayscale.
```js
function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') img = loadImage('data/pic1.jpg');
  if (key == '2') img = loadImage('data/pic2.jpg');
  if (key == '3') img = loadImage('data/pic3.jpg');
  if (key == '4') img = loadImage('data/pic4.jpg');

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
```
Now we add some key features

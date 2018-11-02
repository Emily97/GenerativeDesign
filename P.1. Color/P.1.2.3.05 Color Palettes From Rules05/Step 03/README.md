# 03 Color Palettes From Rules 05

## Code Explained
```js
var tileCountY = int(random(5,30));
var tileHeight = height / tileCountY;
```
Tile count picks an integer value between 5 and 30 to determine how many rows are created. Tile height determines the height of the tiles depending on the number of rows.

```js
for (var gridY = tileCountY; gridY >= 0; gridY--) {
  var numRect = gridY + 1;
  var parts = [];
}
```
Seperate each row in parts. How many rectangles in each row depends on the tileCountY value plus 1. This insures the value is never a negative value.

```js
for (var i = 0; i < numRect; i++) {
  if (random() < 0.075) {
    var fragments = int(random(2, 20));
    numRect += fragments;
    for (var ii = 0; ii < fragments; ii++) {
      parts.push(random(2));
    }
  } else {
    parts.push(random(2, 20));
  }
}
```
When random is declared with no value this means that the range of random values inspect between 0 and 1. If the random number chosen is less than 0.075 then a random number of fragments are created. The random number of fragments is between 2 and 20 and will be an integer. We then enter the for loop which pushes random values into the parts array between 0 and 2. Else if the random value is greater than 0.075 then a random number between 2 and 20 is pushed to the parts array.

```js
var totalParts = 0;
for (var j = 0; j < numRect; j++) {
  totalParts += parts[j];
}
```
Add all the parts from the parts array together to get the total. The totalParts is equated by adding totalParts to the value that is incremented through the parts array.

```js
var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);
centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
```
Create complementary color.
The hue value is subtracted by 180 to gain a new hue that will complement the index color of the first color, the saturation and brightness will remain the same.
```js
function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {
  var ctx = drawingContext; // global canvas context p5.js var
  var cx = x1 + (x2 - x1) / 2; //the centre of the circles x coordinates
  var cy = y1 + (y2 - y1) / 2; //the centre of the circles y coordinates
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());
	ctx.fillStyle = grd;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}
```
This function can be used for creating circles with a radial gradient. However in this example we are using it to create a radial gradient for a rectangle.
createRadialGradient method is specified by six parameters, three defining the gradient's start circle, and three defining the end circle.
A color stop allows for a start and end color to be determined so that the colors inbetween can be interpolated between the two values.
### Example
grd.addColorStop(x, 'color'); the x value determines where in the in the gradient the color begins. If the value is 0 the color placed will be the starting color, if the value is 0.7 it determines the color at 7 tenths of the gradient. The x value in this example can only be between 0 and 1.
By taking x1 and y1 away from x2 and y2 respectively the size of the rectangles is determined.

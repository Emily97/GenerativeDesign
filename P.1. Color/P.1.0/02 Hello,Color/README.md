# 02 Hello, color

## Code Explained

```js
colorMode(HSB, 360, 100, 100);
```
Changes the color value to HSB rather than RGB which is the default. The 3 values indicated determine the range for the Hue, Saturation and Brightness. In this case the Hue range is from 0 - 360.

```js
noStroke();
```
This removes the black stroke currently placed on the rectangle.

```js
background(mouseY/2,100,100);
```
The background color is now set to change color depending on the mouses Y position on the canvas. The saturation and brightness or set to their max range.

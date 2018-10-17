# 02 Hello, color

## Code Explained

```js
colorMode(HSB, 360, 100, 100);
```
The colors should pass through the hue spectrum in this program. For this reason, colorMode() allows users to change the way color value is interpreted. HSB specifies the color model, and the three values following it specify the respective range. Hue, for example, can only be specified by values between 0 and 360.

```js
noStroke();
```
This removes the black stroke currently placed on the rectangle.

```js
background(mouseY/2,100,100);
```
The background color is now set to change color depending on the mouses Y position on the canvas. The saturation and brightness or set to their max range. The y-value of the mouse position is divided by 2 to get values from 0 to 360 on the color wheel.

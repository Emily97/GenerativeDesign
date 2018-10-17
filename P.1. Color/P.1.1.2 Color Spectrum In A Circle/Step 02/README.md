# 02 Color Spectrum In A Circle

## Code Explained
```js
var step = 360/segmentCount;
```
The angle increment step depends on how many segments are to be drawn below. In this case because later we will be filling a circle of 360 degrees we will make 360 segments.

```js
var radius = height/2;
```
The radius of the circle must be half the height of the canvas otherwise the circle would not fit.

```js
vertex(width/2,height/2);
```
The first vertex point (v1) is in the centre of the canvas.

```js
for(var angle = 0; angle <= 90; angle += step) {
    var vx = radius * cos(radians(angle)) + width/2;
    var vy = radius * sin(radians(angle)) + height/2;
    vertex(vx,vy);
    fill(100,100,100);
}
```
For the other vertices (v2, v3 .....), angle has to be converted from degrees(0-360) to radians(0-2π) because the functions sin() and cos() require radians and not degrees. The values from finding the cos and sin of the angles is then placed in the this vertex method.

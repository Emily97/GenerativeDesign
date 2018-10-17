# 03 Color Spectrum In A Circle

## Code Explained
```js
for(var angle = 0; angle <= 360; angle += step) {
    var vx = radius * cos(radians(angle)) + width/2;
    var vy = radius * sin(radians(angle)) + height/2;
    vertex(vx,vy);
    fill(angle,mouseX,mouseY);
}
```
Increase the range between 0 to 360 for the angle. Have the saturation and brightness be effected by the mouses x or y-value.

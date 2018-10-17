# Final Color Spectrum In A Circle

## Code Explained
```js
  if(key == 's' || key == 'S') saveCanvas(gd.timestamp(),'png');
```
If the s key is pressed the canvas is saved as a png, the file will be named by using a timestamp method found in the generative design library.

```js
  switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
    }
```
The switch() command checks the last key pressed, which then switches easily between the keys to increase or decrease the number of segments.

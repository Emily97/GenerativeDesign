# Final Hello, Color

## Code Explained
```js
function keyPressed(){
    if(key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
}
```
The keyPressed() function is called once every time a key is pressed. In this case everytime the s key is pressed the canvas is saved as a png with the file name being created using the date and time as well as the mouses x and y position. This is done using timestamp() which is taken from the generative design library.

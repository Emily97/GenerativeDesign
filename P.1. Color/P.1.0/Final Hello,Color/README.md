# Final Hello, Color

## Code Explained
```js
function keyPressed(){
    if(key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX + '_MouseY_' + mouseY,'png');
}
```
The keyPressed() function is called once every time a key is pressed. In this case everytime the s key is pressed the canvas is saved as a png with the file name being created using the date and time as well as the mouses x and y position. This is done using timestamp() which is taken from the generative design library.

## Examples

![Example](examples/181013_143605_336_MouseX_517_MouseY_458.png?raw=true "Example 1")
![Example](examples/181013_154220_786_MouseX_253_MouseY_116.png?raw=true "Example 2")
![Example](examples/181013_154229_35_MouseX_63_MouseY_73.png?raw=true "Example 3")
![Example](examples/181013_154237_605_MouseX_578_MouseY_517.png?raw=true "Example 4")
![Example](examples/181013_154245_23_MouseX_539_MouseY_660.png?raw=true "Example 5")
![Example](examples/181013_154253_948_MouseX_290_MouseY_639.png?raw=true "Example 6")
![Example](examples/181013_154258_89_MouseX_138_MouseY_368.png?raw=true "Example 7")
![Example](examples/181013_154315_257_MouseX_355_MouseY_691.png?raw=true "Example 8")
![Example](examples/181013_154331_118_MouseX_442_MouseY_48.png?raw=true "Example 9")

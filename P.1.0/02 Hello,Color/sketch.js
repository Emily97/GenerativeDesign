function setup(){
    createCanvas(720,720);
    // changes the color value to HSB rather than RGB.
    // The 3 values indicated determine the range for the Hue, Saturation and Brightness.
    // In this case the Hue range is from 0 - 360.
    colorMode(HSB, 360, 100, 100);
    // This removes the black stroke currently placed on the rectangle.
    noStroke();
}

function draw(){
    // The background color is now set to change color depending on the mouses Y position on the canvas.
    // The saturation and brightness or set to their max range.
    background(mouseY/2,100,100);
    fill(200,100,100);
    rect(200,200,200,200);
}

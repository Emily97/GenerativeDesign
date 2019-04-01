
//global variables
let font;
let gradient;
let textImg;

let pointDensity = 6;
let fontSize = 120;
let circleRadius = 5;
let radiusSlider;
let densitySlider;
let fontSlider;
let randomSlider;

let checkbox;
let radio;
let jitterBox;
let animationBox;

let filled = 1;
let shape = 1;
let jitter = false;
let animation = false;

let textInput = 'spark joy';
let inputText;

let startPosition;
let endPosition;
let xPos;
let yPos;

let canvasWidth = 500;
let canvasHeight = 500;

let lerpAmount = 0;
let speed = 0.000005;
let count = 270;

function preload() {
  font = loadFont('data/FreeSansBold.ttf');
  gradient = loadImage('data/gradient2.png', setImage );
}
function setup() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  let canvas = createCanvas(500,500);
  canvas.parent('canvasHolder');

  //slider -> radius size
  radiusSlider = createSlider(1,20,circleRadius);
  radiusSlider.parent('radiusController');
  radiusSlider.mouseReleased(update);
  // let output = document.getElementById('demo');
  // output.innerHTML = circleRadius.value;

  //slider -> pixel density
  densitySlider = createSlider(3,10,pointDensity);

  densitySlider.parent('densityController');
  densitySlider.mouseReleased(update);

  //slider -> font
  fontSlider = createSlider(100,500,fontSize);
  fontSlider.parent('fontController');
  fontSlider.input(update);

  //checkbox -> fill
  checkbox = createCheckbox('Fill', true);
  checkbox.parent('fillController');
  checkbox.changed(update);

  //checkbox -> jitter
  jitterBox = createCheckbox('Jitter', false);
  jitterBox.parent('jitterController');
  jitterBox.changed(update);

  //checkbox -> animation
  animationBox = createCheckbox('Animate', false);
  animationBox.parent('animationController');
  animationBox.changed(update);

  //create more shape options, radio buttons
  radio = createRadio();
  radio.option('Rectangle',1);
  radio.option('Circle',2);
  radio.parent('shapeController');
  radio.changed(update);

  //text input box
  inputText = createInput(textInput);
  inputText.parent('inputController');
  inputText.changed(update);

  setupText();

}

function draw() {
  gradient.loadPixels();
  startPosition = [];
  endPosition = [];
  animationStart();
  background(0, 30);
  //the increment amount increases and decreases in value depending on the mouses X position relative to the screen
  let incrementX = mouseX / width;
  //the angle at which the rectangles or circles will move
  let angle = radians(360 / count);
  // stroke(255);

  for(let y = 0; y < height; y += pointDensity) {
    for(let x = 0; x < width;x += pointDensity) {

      let index = (x + y * textImg.width) * 4;
      let tr = textImg.pixels[index];
      let r = gradient.pixels[index] ;
      let g = gradient.pixels[index + 1] ;
      let b = gradient.pixels[index + 2] ;
      let colour = color(r,g,b);

      let movement = 1 - lerpAmount;
      lerpAmount += movement * speed;

      xPos = lerp(startPosition[index].x, endPosition[index].x, lerpAmount);
      yPos = lerp(startPosition[index].y, endPosition[index].y, lerpAmount);

      //changes the xPos and yPos between -1 and 1 randomly to shake(jitter) the pixels postion around from its starting position
      if(jitter) {
        xPos = random(
          xPos - 5,
          xPos + 5
        );
        yPos = random(
          yPos - 5,
          yPos + 5
        );
      }

      if(tr < 128) {
        //starting position
        let startX = random(0,width);
        let startY = random(0,height);
        //finishing position
        let finishX = width / 3 + cos(angle);
        let finishY = height / 3 + sin(angle);
        //lerp -> calculates a number between two numbers at a specific increment
        //in this instance incrementX is the amount to be interpolated between startX/startY and finishX/finishY
        let x = lerp(startX,finishX,incrementX);
        let y = lerp(startY,finishY,incrementX);
        if(filled) {
          fill(colour);
          noStroke();
          if(shape == 1) {
            if(animation) {
              //adding animation to the shapes
              rect(xPos + x / 4,yPos + y / 4,circleRadius,circleRadius);
            }else{
              rect(xPos,yPos,circleRadius,circleRadius);
            }
          }else if(shape == 2) {
            if(animation) {
              ellipse(xPos + x / 4,yPos + y / 4,circleRadius,circleRadius);
            }else{
              ellipse(xPos,yPos,circleRadius,circleRadius);
            }
          }
        }else{
          noFill();
          stroke(255);
          if(shape == 1) {
            if(animation) {
              rect(xPos + x / 4,yPos + y / 4,circleRadius,circleRadius);
            }else{
              rect(xPos,yPos,circleRadius,circleRadius);
            }
          }else if(shape == 2) {
            if(animation) {
              ellipse(xPos + x / 4,yPos + y / 4,circleRadius,circleRadius);
            }else{
              ellipse(xPos,yPos,circleRadius,circleRadius);
            }
          }
        }
      }
    }
  }
}

function animationStart() {
  //adds the animation of the pixels falling into place when the application is loaded
  for(let y = 0; y < height; y += pointDensity) {
    for(let x = 0; x < width; x += pointDensity) {

      let index = (x + y * canvasWidth) * 4;

      startPosition[index] = {x: Math.floor(random(0,width)), y: Math.floor(random(0,height))};
      endPosition[index] = {x: x, y: y};
    }
  }
}

function setupText() {
  textImg = createGraphics(500,500);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.textAlign(CENTER,CENTER);
  textImg.text(textInput,width / 2,height / 2);
  textImg.loadPixels();
}

function update() {
  circleRadius = radiusSlider.value();
  animationStart();
  textInput = inputText.value();
  if(checkbox.checked() == 1) {filled = 1;}else{filled = 0;}
  shape = radio.value();
  if(jitterBox.checked() == 1) {jitter = true;}else{jitter = false;}
  pointDensity = densitySlider.value();
  fontSize = fontSlider.value();
  if(animationBox.checked() == 1) {animation = 1;}else{animation = 0;}
  setupText();
}

function keyReleased() {
  //saves canvas as png
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  //switches between different images by pressing the following keys
  if (key == '1') loadImage('data/gradient2.png', setImage);
  if (key == '2') loadImage('data/gradient2.jpg', setImage);
  if (key == '3') loadImage('data/gradient3.jpg', setImage);
  if (key == '4') loadImage('data/gradient4.jpg', setImage);
  if (key == '5') loadImage('data/gradient5.jpg', setImage);
}

function setImage(loadedImageFile) {
  //each time a key is pressed that is associated with an image it changes the image
  gradient = loadedImageFile;
}

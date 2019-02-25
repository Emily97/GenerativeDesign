let font;
let gradient;
let textImg;

let pointDensity = 6;
let fontSize = 150;
let circleRadius = 5;
let radiusSlider;
let densitySlider;
let fontSlider;
let randomSlider;

let checkbox;
let radio;
let jitterBox;

let filled = 1;
let shape = 1;

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

let jitter = true;

function preload() {
  font = loadFont('data/FreeSansBold.ttf');
  gradient = loadImage('data/gradient2.png', setImage );
}
function setup() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  let canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.parent('canvasHolder');

  radiusSlider = createSlider(1,20,circleRadius);
  radiusSlider.parent('radiusController');
  radiusSlider.mouseReleased(update);

  densitySlider = createSlider(3,10,pointDensity);
  densitySlider.parent('densityController');
  densitySlider.mouseReleased(update);

  fontSlider = createSlider(100,500,fontSize);
  fontSlider.parent('fontController');
  fontSlider.input(update);

  checkbox = createCheckbox('Fill', true);
  checkbox.parent('fillController');
  checkbox.changed(update);

  jitterBox = createCheckbox('Jitter', true);
  jitterBox.parent('jitterController');
  jitterBox.changed(update);

  //create more shape options, radio buttons
  radio = createRadio();
  radio.option('Rectangle',1);
  radio.option('Circle',2);
  radio.parent('shapeController');
  radio.changed(update);

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

      if(jitter) {
        xPos = random(
          xPos - 10,
          xPos + 10
        );
        yPos = random(
          yPos - 10,
          yPos + 10
        );
      }
      let angleX = frameCount / 10;
      let mySin = sin(angleX);
      if(tr < 128) {
        if(filled) {
          fill(colour);
          noStroke();
          if(shape == 1) {
            rotate(45);
            rect(xPos,mySin*yPos,circleRadius,circleRadius);
          }else if(shape == 2) {
            ellipse(xPos,yPos,circleRadius,circleRadius);
          }
        }else{
          noFill();
          stroke(255);
          if(shape == 1) {
            rect(xPos,yPos,circleRadius,circleRadius);
          }else if(shape == 2) {
            ellipse(xPos,yPos,circleRadius,circleRadius);
          }
        }
      }
    }
  }
}

function animationStart() {
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
  setupText();
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') loadImage('data/gradient2.png', setImage);
  if (key == '2') loadImage('data/gradient2.jpg', setImage);
  if (key == '3') loadImage('data/gradient3.jpg', setImage);
  if (key == '4') loadImage('data/gradient4.jpg', setImage);
  if (key == '5') loadImage('data/gradient5.jpg', setImage);
}

function setImage(loadedImageFile) {
  gradient = loadedImageFile;
}

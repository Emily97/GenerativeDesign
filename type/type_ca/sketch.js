let font;
let gradient;
let textImg;
let randomNess = 5;
let pointDensity = 6;
let fontSize = 150;

let circleRadius = 5;
let radiusSlider;
let densitySlider;
let fontSlider;
let randomSlider;

let checkbox;
let shapeBox;

let filled = 1;
let shape = 1;

let textInput = 'abc';
let inputText;

let startPos;
let endPos;
let xPos;
let yPos;

let canvasWidth =500;
let canvasHeight = 500;
let lerpAmount = 0;
let easing = 0.00001;

let jitter = true;

function preload(){
  font = loadFont('data/FreeSansBold.ttf');
  gradient = loadImage('data/gradient2.png');
}
function setup(){
  rectMode(CENTER);
  ellipseMode(CENTER);
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

  shapeBox = createCheckbox('Rectangle', true);
  shapeBox.parent('shapeController');
  shapeBox.changed(update);

  

  inputText = createInput(textInput);
  inputText.parent('inputController');
  inputText.changed(update);

  gradient.loadPixels();

  setupText();

}

function draw(){
    startPos = [];
    endPos = [];
    startPoints();
  background(0, 30);
  // stroke(255);

  for(let y = 0; y < height; y+=pointDensity){
    for(let x = 0; x < width;x+=pointDensity){

      let index = (x + y * textImg.width) * 4;
      let tr = textImg.pixels[index];
      let r = gradient.pixels[index] ;
      let g = gradient.pixels[index + 1] ;
      let b = gradient.pixels[index + 2] ;
      let colour = color(r,g,b);

      var dx = 1 - lerpAmount;
      lerpAmount += dx * easing;

      xPos = lerp(startPos[index].x, endPos[index].x, lerpAmount);
      yPos = lerp(startPos[index].y, endPos[index].y, lerpAmount);

      if(jitter){
          xPos = random(
              xPos-5,
              xPos+5
          );
          yPos = random(
              yPos-5,
              yPos+5
          );
      }

      if(tr < 128){
        if(filled){
          fill(colour);
          noStroke();
            if(shape){
              rect(xPos,yPos,circleRadius,circleRadius);
            }else{
            ellipse(xPos,yPos,circleRadius,circleRadius);
          }
        }else{
          noFill();
          stroke(255);
            if(shape){
              rect(xPos,yPos,circleRadius,circleRadius);
            }else{
            ellipse(xPos,yPos,circleRadius,circleRadius);
          }
        }
      }
    }
  }
}

function startPoints() {
    for(let y = 0; y < height; y += pointDensity) {
        for(let x = 0; x < width; x += pointDensity) {

            let index = (x + y * canvasWidth) * 4;

            startPos[index] = {x: Math.floor(random(0,width)), y: Math.floor(random(0,height))};
            endPos[index] = {x: x, y: y};
        }
    }
}

function setupText(){
  textImg = createGraphics(500,500);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize);
  textImg.text(textInput,0,100,50,50);
  textImg.loadPixels();
}

function update(){
  circleRadius = radiusSlider.value();
  startPoints();
  textInput = inputText.value();
  if(checkbox.checked() == 1){filled = 1;}else{filled = 0;}
  if(shapeBox.checked() == 1){shape = 1;}else{shape = 0;}
  pointDensity = densitySlider.value();
  fontSize = fontSlider.value();
  setupText();
}

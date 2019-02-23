let font;
let gradient;
let textImg;
let random;
let pointDensity = 6;
let fontSize = 150;

let circleRadius = 5;
let radiusSlider;
let densitySlider;
let fontSlider;
let randomSlider;

let checkbox;
let shapeBox;
let animateBox;

let filled = 1;
let shape = 1;
let rand = 1;

let textInput = 'abc';
let inputText;

function preload(){
  font = loadFont('data/FreeSansBold.ttf');
  gradient = loadImage('data/gradient2.png');
}
function setup(){
  rectMode(CENTER);
  ellipseMode(CENTER);
  let canvas = createCanvas(500,500);
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

  randomSlider = createSlider(1,20,random);
  randomSlider.parent('randomController');
  randomSlider.input(update);

  checkbox = createCheckbox('Fill', true);
  checkbox.parent('fillController');
  checkbox.changed(update);

  shapeBox = createCheckbox('Rectangle', true);
  shapeBox.parent('shapeController');
  shapeBox.changed(update);

  animateBox = createCheckbox('Animation', true);
  animateBox.parent('animationController');
  animateBox.changed(update);

  inputText = createInput(textInput);
  inputText.parent('inputController');
  inputText.changed(update);

  gradient.loadPixels();

  setupText();

}
function draw(){
  background(0, 30);
  // stroke(255);

  for(let y = 0; y < textImg.width; y+=pointDensity){
    for(let x = 0; x < textImg.width;x+=pointDensity){

      let index = (x + y * textImg.width) * 4;
      let tr = textImg.pixels[index];
      let r = gradient.pixels[index] ;
      let g = gradient.pixels[index + 1] ;
      let b = gradient.pixels[index + 2] ;
      let colour = color(r,g,b);

      if(tr < 128){
        if(filled){
          fill(colour);
          noStroke();
            if(shape){
              rect(x,y,circleRadius,circleRadius);
            }else{
            ellipse(x,y,circleRadius,circleRadius);
          }
        }else{
          noFill();
          stroke(255);
            if(shape){
              rect(x,y,circleRadius,circleRadius);
            }else{
            ellipse(x,y,circleRadius,circleRadius);
          }
        }
      }

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
  textInput = inputText.value();
  setupText();

  if(checkbox.checked() == 1){
    filled = 1;
  }else{
    filled = 0;
  }

  if(shapeBox.checked() == 1){
    shape = 1;
  }else{
    shape = 0;
  }

  pointDensity = densitySlider.value();
  fontSize = fontSlider.value();
}
//
// var lerpAmount = (counter / finishArray.length) * stepAmount;
// if(lerpAmount > 1){
//   lerpAmount = 1;
// }
// var xPos = lerp(startArray[i].xPos, finishArray[i].xPos,lerpAmount);
// var yPos = lerp(startArray[i].yPos, finishArray[i].yPos, lerpAmount);
//
// ellipse(xPos,yPos,circleRadius, circleRadius);

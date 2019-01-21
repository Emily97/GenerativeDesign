//Two red Circles on the second hand are 15px and 25px in width respectively
let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandLength = 195;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

function setup() {
  createCanvas(500, 500);
  noLoop();
  angleMode(DEGREES);

  minuteStrokeColor = color(30,30,30);
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30,30,30);
  hourStrokeCap = SQUARE;
}
function draw() {
  background(0);
  translate(width/2,height/2);
  noFill();
  //ellipse(0,0,clockRadius,clockRadius);


  push();
  fill(hourStrokeColor);
  stroke(hourStrokeCap);
  rotate(30);

  beginShape();
    vertex(0,hourHandOffset);
    vertex(0,hourHandLength);
    vertex(hourHandsTaper,hourHandLength);
    vertex(hourHandStartWidth,hourHandOffset);
  endShape(CLOSE);

  fill(minuteStrokeColor);
  stroke(minuteStrokeCap);
  rotate(170);
  beginShape();
    vertex(0,minuteHandOffset);
    vertex(0,minuteHandLength);
    vertex(minuteHandsTaper,minuteHandLength);
    vertex(minuteHandStartWidth,minuteHandOffset);
  endShape(CLOSE);
  pop();

  push();
    fill(255,0,0);
    rotate(45);
    beginShape();
      vertex(0,secondHandOffset);
      vertex(0,secondHandLength);
      vertex(secondHandsTaper,secondHandLength);
      vertex(secondHandStartWidth,secondHandOffset);
    endShape(CLOSE);

    ellipse(0,0,15,15);
    ellipse(0,secondHandLength,25,25);
  pop();

  fill(0);
  for(var i=0;i<72;i++){
    if(i%6){
      angle(6);
      rect(0-180,5,20);
    }else{
      angle(0);
      rect(0,-180,1,20);
    }
  }
}

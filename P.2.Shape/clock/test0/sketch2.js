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

var startAngle = 0;
var myAngle = 6;

function setup() {
  createCanvas(500, 500);
  noLoop();
  angleMode(DEGREES);
  // ellipseMode(CENTER);

  minuteStrokeColor = color(30,30,30);
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30,30,30);
  hourStrokeCap = SQUARE;
}
function draw() {
  translate(width/2,height/2);
  noFill();
  // ellipse(0,0,clockRadius,clockRadius);
  fill(0);
  for(var i = 0; i<72; i++){
      if(i%6){
          rotate(myAngle);
          rect(0,-100,1,5);
      }
      else{
          rotate(startAngle);
          rect(0,-100,5,15);
      }
  }

  push();
      fill(hourStrokeColor);
      strokeCap(hourStrokeCap);
      rotate(60);
      beginShape();
          vertex(-hourHandStartWidth,-hourHandStartWidth/2);
          vertex(hourHandLength-hourHandOffset-hourHandStartWidth,0);
          vertex(hourHandLength-hourHandOffset-hourHandStartWidth,hourHandsTaper);
          vertex(-hourHandStartWidth,hourHandStartWidth/2);
      endShape(CLOSE);
  pop();

    push();
        fill(minuteStrokeColor);
        strokeCap(minuteStrokeColor);
        rotate(-45);
        beginShape();
            vertex(-minuteHandStartWidth,-minuteHandStartWidth/2);
            vertex(minuteHandLength-minuteHandOffset-minuteHandStartWidth,0);
            vertex(minuteHandLength-minuteHandOffset-minuteHandStartWidth,minuteHandsTaper);
            vertex(-minuteHandStartWidth,minuteHandStartWidth/2);
        endShape(CLOSE);
    pop();

    push();
        noStroke();
        fill(255,0,0);
        rotate(-25);
        ellipse(0,0,15,15);
        ellipse(secondHandLength-secondHandOffset-secondHandStartWidth,0,25,25);
        beginShape();
            vertex(-secondHandStartWidth,-secondHandStartWidth/2);
            vertex(secondHandLength-secondHandOffset-secondHandStartWidth,0);
            vertex(secondHandLength-secondHandOffset-secondHandStartWidth,secondHandsTaper);
            vertex(-secondHandStartWidth,secondHandStartWidth/2);
        endShape(CLOSE);
    pop();
}

var startAngle = 0;
var myAngle = 6;
var textAngle = 30;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
}
function draw() {
  background(220);
  translate(width/2,height/2);
  fill(0);

  push();
    rotate(60);
    rect(0, -20, 5, 120);
    rotate(246);
    rect(0,-50,5,180);
  pop();

  for(var i = 0; i<72; i++){
      if(i%6){
          rotate(myAngle);
          rect(0,-180,1,30);
      }
      else{
          rotate(startAngle);
          rect(0,-180,5,30);
      }
  }

  push();
    noStroke();
    fill(255,0,0);
    rect(0,-20,2,100);
    ellipse(0,-70,15,15);
    ellipse(0,0,10,10);
  pop();

  noFill();
  ellipse(0,0,390,390);
  numbers();

  // function numbers() {
  //     for(i=0;i < 12; i++){
  //         push();
  //           translate(width/2,height/2);
  //           rotate(textAngle);
  //
  //           textSize(120);
  //
  //           text(i+1,0 * 390, 190*390);
  //         pop();
  //     }
  // }
}

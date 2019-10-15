let angle, speed;
let canvasWidth = 640;
let canvasHeight = 480;
let radius = 200;
// let speed = 1;
// let angle = 0;
function setup() {
  // put setup code here
  createCanvas(canvasWidth, canvasHeight);
  angle = 0.0;
  speed = 1;
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  // background(0);
  // rectMode(CENTER);
  // let col = map(sin(angle),-1,1,0,255);
  // fill(col,100,127);
  // let he = map(cos(angle), -1, 1, 50, height*0.4);
  // rect(width / 2, height / 2, 30, he);
  // angle += speed;
  background(0);
  noFill();
  strokeWeight(4);
  stroke('red');
  ellipseMode(CENTER);
  strokeWeight(2);
  line(0,canvasHeight/2, canvasWidth, canvasHeight/2);
  line(canvasWidth/2, 0, canvasWidth/2,canvasHeight);
  ellipse(canvasWidth / 2, canvasHeight / 2, radius*2);
  let arrowX = canvasWidth/2 + cos(angle)*radius;
  let arrowY = canvasHeight/2 - sin(angle) * radius;
  line(canvasWidth/2, canvasHeight/2, arrowX, arrowY);

  angle += speed;
  angle %= 360;
}
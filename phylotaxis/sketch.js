let c = 4;
let angle = 137.5;
let n = 0;
let phi, r, x, y;
let s = 600;
let buffer = 50;

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(s, s);
  background(70);
  angleMode(DEGREES);
  colorMode(HSB);
}

function drawStep(n_) {
  phi = n_ * angle;
  r = c * sqrt(n_);
  x = r * sin(phi);
  y = r * cos(phi);
  // let hu = map(11*r%360,0,360,40,230);
  // fill(hu,100,100,50);
  fill(200,100);
  let cr = map(r,0,250,10,12);
   c = map(r,0,250,4,5);
  // noStroke();
  circle(x, y, cr);
}

function draw() {
  if (c * sqrt(n) > (s / 2 - buffer))
    noLoop();
  translate(width / 2, height / 2);
  for (let i = 1; i < 10; i++) {
    drawStep(n++);
  }
}
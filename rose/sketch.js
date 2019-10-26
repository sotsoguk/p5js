let nSlider, dSlider, fillCheckbox;
let fillStyle = true;
let saveButton;
let d = 5;
let n = 4;
let c = 0;
let r = 250;
let offset = 0;
let angleDelta = 0.01;
let stepDelta = 20;
function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(0);
  dSlider = createSlider(1,50,5);
  dSlider.position(20,height+20);
  dSlider.changed(redraw);
  nSlider = createSlider(1,50,4);
  nSlider.position(20,height+50);
  nSlider.changed(redraw);
  saveButton = createButton('save');
  saveButton.position(200,height+20);
  saveButton.mousePressed(saveImage);
  fillCheckbox = createCheckbox('fill', true);
  fillCheckbox.changed(redraw);
}

function draw() {
  // put drawing code here
  
  d = dSlider.value();
  n = nSlider.value();
  fillStyle = fillCheckbox.value();
  console.log(fillStyle);
  background(0,30);
  // fill(255);
  noStroke();
  fill(255);
  text("k="+d+"/"+n, 20, height-30);
  colorMode(HSB);
  angle = 0;
  let k = d / n;
  //fill(181,100);
  // noFill();
  //stroke(199,200);
  stroke(0,100,100,0.5);
  strokeWeight(15);
  translate(width/2,height/2);
  //rotate(offset);
  let steps = 0;
  let totalSteps = 2*PI*n/angleDelta;
  // beginShape();
  while (angle <= n*PI*2+angleDelta){
    if (steps%stepDelta === 0){
      stroke( steps*360/totalSteps,100,100,1);
      //  if (!fillStyle == true){
        //fill( steps*360/totalSteps,100,100,1);
      // }
      // else
       noFill();
      beginShape();
      if (steps != 0)
        vertex(cos(k*(angle-angleDelta))*cos((angle-angleDelta))*r+c,
        cos(k*(angle-angleDelta))*sin((angle-angleDelta))*r+c);
    }
    let x = cos(k*angle)*cos(angle)*r+c;
    let y = cos(k*angle)*sin(angle)*r+c;
    vertex(x,y);
    if (steps %20 == 19){
      endShape();
    }
    angle += angleDelta;
    steps++;
  }
  endShape();
  //offset +=.005;
  noLoop();
}

function saveImage(){
  save('rose.png');
}
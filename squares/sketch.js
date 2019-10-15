let canvasSize = 800;
let imageSize = 1600;
let sideLength = 1200;
let steps = 20;
let pg;
let strokeWidth;
let filename = 'squares.png'
//let maxAngle = 80;

function setup() {
  createCanvas(canvasSize, canvasSize+200);
  pg = createGraphics(imageSize, imageSize);
  noLoop();
  pg.angleMode(DEGREES);
  angleMode(DEGREES);
  sliderAngle = createSlider(5, 720, 180, 5);
  sliderAngle.position(30,10);
  sliderAngle.style('width','60px');
  sliderAngle.changed(redraw);
  sliderSteps = createSlider(1,200,20,1);
  sliderSteps.position(30,40);
  sliderSteps.style('width','60px');
  sliderSteps.changed(redraw);
  sliderStrokeWidth = createSlider(1, 10, 2, 1);
  sliderStrokeWidth.position(150,10);
  sliderStrokeWidth.style('width','60px');
  sliderStrokeWidth.changed(redraw);
  sliderInitRotation = createSlider(0, 90, 0, 5);
  sliderInitRotation.position(150,30);
  sliderInitRotation.style('width','60px');
  sliderInitRotation.changed(redraw);
  sliderRectSize = createSlider(200, 1200, 600, 50);
  sliderRectSize.position(150,50);
  sliderRectSize.style('width','60px');
  sliderRectSize.changed(redraw);
  buttonSave = createButton('save');
  buttonSave.position(30,70);
  buttonSave.mousePressed(saveImage);
  checkboxInvertColor = createCheckbox('invert colors', false);
  checkboxInvertColor.changed(redraw);
  checkboxInvertDirection = createCheckbox('invert direction', false);
  checkboxInvertDirection.changed(redraw);
  noFill();
  strokeWeight(2);
  stroke(0);
  rect(2,2,797,196);
  fgcolor = createColorPicker(color('gray'));
  fgcolor.input(redraw);
  bgcolor = createColorPicker(color('black'));
  bgcolor.input(redraw);
}

function draw() {
  //let colorFG = (checkboxInvertColor.checked() ? 'black':'gray');
  //let colorBG = checkboxInvertColor.checked() ? 'white':'black';
  let colorFG = fgcolor.color();
  let colorBG = bgcolor.color();
  if (checkboxInvertColor.checked())
    [colorFG, colorBG] = [colorBG, colorFG];
  // console.log(checkboxInvertColor.value());
  strokeWidth = sliderStrokeWidth.value();
  // s = sideLength;
  s = sliderRectSize.value()*2;
  let maxAngle = sliderAngle.value();
  steps = sliderSteps.value();
  let stepWidth = maxAngle / steps;
  // console.log(stepWidth); 
  pg.reset();
  // pg = createGraphics(canvasSize, canvasSize);
  pg.translate(imageSize  / 2, imageSize / 2);
  pg.background(colorBG);
  pg.strokeWeight(strokeWidth);
  //pg.stroke(colorFG);
  let colorStep = 255 / steps;
  pg.rectMode(CENTER);
  rectMode(CENTER);
  pg.noFill();
  pg.rotate(sliderInitRotation.value());
  for (let i = 0; i <= maxAngle; i += stepWidth) {
    if (i > 0) {
      pg.angleMode(DEGREES);
      pg.stroke(255 - i * colorStep);
      if (checkboxInvertDirection.checked())
        pg.rotate(-stepWidth);
      else
        pg.rotate(stepWidth);
    }
    s = s / (sqrt(2) * sin(stepWidth + 45));
    // console.log(s);
    pg.rect(0, 0, s, s);
  }
  image(pg,0,200, pg.width / 2, pg.height / 2);
  //rect(0,0,l,l);
  //rotate(a);
  //let lneu = l * (tan(a)/(1+tan(a)))/sin(a);
  //let lneu = l / (sin(a)+cos(a));
  //let lneu = l / (sqrt(2) * sin(a+45));
  //let lneu = 60;
  //rect(0,0,lneu,lneu);
  //drawRect(l,10);
}
function saveImage()
{
  save(pg, filename);
}
function drawRect(s, a) {
  let l = s / (sin(a) + cos(a));
  rect(0, 0, l, l);
}
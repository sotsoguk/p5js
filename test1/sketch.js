
var co = 50;
function setup() {
  // put setup code here
  createCanvas(400, 300);
  print("Hello World");
  background(250,250,100);
  s = createSlider(0, 255, 50, 5);
  s.position(80, 30);
  s.style('width', '80px');
}

function draw() {
  // put drawing code here
  
   co = s.value();
   background(co,250,100);
  rectMode(CENTER);
  ellipseMode(CENTER);
  fill(160,50*random(0,3),20,50);
  noStroke();
 // ellipse(mouseX, mouseY, 20*random(0,2));
}


let w = 800;

function setup() {
  // put setup code here
  createCanvas(w, w);
  noLoop();
}

function draw() {
  background(120);
  
  let minWidth = 10;
  let maxWidth = 50;
  let currX = 0;
  let currY = w / 2;
  stroke(255);
  strokeWeight(3);
  line(0,0,200,200);
  while (currX < w)
  {
    let stepWidth = random(minWidth, maxWidth);
    let stepHeight = 0.8* random(-stepWidth,stepWidth);
    if ((currY + stepHeight) < 0 || (currY + stepHeight) > w)
      stepHeight = -stepHeight;
    
    line(currX,currY, (currX + stepWidth < w)?currX+stepWidth:w, currY + stepHeight);
    currX += stepWidth;
    

    currY += stepHeight;
    

  }
  drawHouses();
  // put drawing code here
}

function drawHouses()
{
    
    strokeWeight(2);
    //stroke('blue');
    noStroke();
    let minWidth = 20;
    let maxWidth = 100;
    let currX = 0;
    rectMode(CORNER);
    while (currX < w)
    {
      let width = random(minWidth, maxWidth);
      // if (currX + width > w)
      // {
      //   width = currX-w;
      // }
      let colorFill = random(120,240);
      let height = width * 2;
      let overlap = random(-5,5);
      fill(colorFill);
      rect(currX+overlap*3,w-height,width,height);
      currX += width;
      console.log(currX);
    }
}
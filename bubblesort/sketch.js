let aa =[]
let colors =[];
let ind;
let nums;
function setup() {
  // put setup code here
  nums = 500;
  colorMode(HSB);
  for (let i=0;i<nums;i++)
    aa.push(random(0,100));
    // aa.push(i);
  //aa=[1,2,3]
  for (let i=0;i<nums;i++)
    colors.push((360*i)/nums);
  ind=0;
  createCanvas(800, 800);
  frameRate(30);
  // noLoop();
}
function swap(a,i,j){
  let tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}
function draw() {
  // put drawing code here
  background(0);
  if (ind < aa.length){
    for (let j=0;j<aa.length - ind-1;j++){
      let m = aa[j];
      let n = aa[j+1];
      if (m>n){
        swap(aa,j,j+1); 
        swap(colors,j,j+1);
      }
    }
  }
  else{
    console.log("finished");
    textSize(20);
  stroke(255);  
  
    text("sorted",650,770);
    noLoop();
  }
  drawArray(aa);
  
  textSize(32);
  stroke(255);  
  if (ind % 5 == 0)
    text(".",700,770);
  else if (ind % 5 == 1)
  text("..",700,770);
  else if (ind %5 == 2) 
  text("...",700,770);
  else if (ind %5 == 3) 
  text("....",700,770);
  else //if (ind %5 == 4) 
  text(".....",700,770);
  ind++;
  // rect(530,50,220,700);
}

function drawArray(a){

  let maxValue = max(a);
  noStroke();
  //console.log(maxValue);
  let margin = 50;
  let between = 1;
  let numValues = a.length;
  let colWidth = (width-2*margin- (numValues-1)*between) / numValues;
  let maxHeight = height-2*margin;
  
  let currX = margin;
  let currY = height-margin;
  for (let i=0;i<numValues;++i){
    //console.log(a[i]*maxHeight/maxValue);
    fill(260,colors[i],100);
    if (i == a.length-ind)
      fill(100, 60, 80);
    else{
      fill(260,colors[i],100);
    }
    //fill(colors[i],100,100);
    rect(currX, currY-(a[i]*maxHeight)/maxValue,colWidth, (a[i]*maxHeight)/maxValue,90);
    if (i == a.length-ind){
      stroke(100, 60, 80);
      line(currX+colWidth/2, height-10, currX+colWidth/2, height-40);
      noStroke();
    }
    // console.log(currX,currY-(a[i]*maxHeight)/maxValue,colWidth, (a[i]*maxHeight)/maxValue);
    currX += (colWidth+between);
  }
}

function bSort(a){
  drawArray(a);
  let numValues = a.length;
  for (let i =0;i<numValues;++i){
    for (let j =i+1;j<numValues;++j){
      if (a[j] < a[i]){
        let tmp = a[j];
        a[j] = a[i];
        a[i] = tmp;
      }
    background(0);
      drawArray(a);
      

    }
  }
}
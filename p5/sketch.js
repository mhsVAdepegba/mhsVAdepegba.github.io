
var circleSize = 30

/* Mouse following using automatic function calls.
Courtney Edwards 2018-09-01*/

function setup() {
  var firstCanvas = createCanvas(600, 600);  
  // create a square window for drawing
  //firstCanvas.parent('sketch1'); 
  // Connect with the <div id="sketch1">
}
function draw() {
  // This function does nothing, but it must exist.
  

 
}
function mouseMoved() {
  // This function is called whenever the mouse is moved
  
  // Draw a lolipop
 
  ellipse(mouseX, mouseY, circleSize, circleSize);
  line(mouseX,mouseY,mouseX + 30,mouseY + 30)

  
}
 function mouseClicked() {
  // This function is called whenever the mouse is clicked
  // (but the mouse must not be moving at the same time)
  // and will change the fill colour randomly
  fill(random(255), random(255), random(255));
   circleSize = circleSize + random(3)
}



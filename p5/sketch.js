/* Mouse following using built-in variables
Courtney Edwards 2018-09-01*/


function setup() {
  var secondCanvas = createCanvas(600, 600);  // create a square window for drawing
  //secondCanvas.parent('sketch2');  // Connect with the <div id="sketch2">
}

function draw() {
  fill(255,255,255);
  rect(0,0,600,600);
  line(mouseX, mouseY, 50, 100);
  // Draw a circle
  if (mouseIsPressed) {
    // When the mouse button is pressed
    // change the colour randomly
    
    stroke(random(255), random(255), random(255));
    
  } 

}
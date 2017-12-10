var aball;
var fs;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);  
}

function draw() {
  if (aball != null) {
    aball.display();
  }
}

function mousePressed() {
  fs = fullscreen();
  if (!fs) fullscreen(true);
}

function mouseClicked() {
  aball = new Ball(mouseX, mouseY);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

document.ontouchmove = function(event) {
    event.preventDefault();
};
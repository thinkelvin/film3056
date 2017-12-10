// define Class Ball
function Ball(_x, _y) {
  this.xpos = _x;
  this.ypos = _y;
  this.diameter = random(30,60);
  this.lifetime = random(100,200);
  this.bColor = color(random(255),random(255),random(255));
  
  this.display = function() {
    fill(this.bColor);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.xpos, this.ypos, this.diameter, this.diameter);
  };
}
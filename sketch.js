let section;

function setup() {
  section = document.querySelector(".etape-7");

  let myCanvas = createCanvas(section.offsetWidth, section.offsetHeight);

  myCanvas.parent(section);

  noFill();
  stroke(0);
  strokeWeight(1);
  frameRate(30);
  pixelDensity(1);
}

function draw() {
   background(255);

  line(0, mouseY, width, mouseY);

  line(mouseX, 0, mouseX, height);
  stroke(255, 119, 0);
  stroke(66, 225, 156);
}

function windowResized() {
  resizeCanvas(section.offsetWidth, section.offsetHeight);
}
if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);
}

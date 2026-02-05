let section;

function setup() {
  // On récupère la section
  section = document.querySelector(".etape-7");

  // On crée un canvas à la taille de la section
  let myCanvas = createCanvas(section.offsetWidth, section.offsetHeight);

  // On attache le canvas à la section
  myCanvas.parent(section);

  noFill();
  stroke(0);
  strokeWeight(1);
}

function draw() {
  // ⚠️ Pas de background pour laisser les traces
background(255); //← à activer si tu veux effacer à chaque frame

  // Ligne horizontale qui suit la souris
  line(0, mouseY, width, mouseY);

  // Ligne verticale qui suit la souris
  line(mouseX, 0, mouseX, height);
}

function windowResized() {
  // On adapte le canvas si la section change de taille
  resizeCanvas(section.offsetWidth, section.offsetHeight);
}
if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);
}

/*function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent(".etape-7");
  noFill();
  strokeWeight(1);
}
function draw() {
  // Efface l'écran à chaque frame avec un fond gris clair
//   background(220);

  // Dessine une ligne horizontale
  x1 = 0 //(bord gauche)
  y1 = mouseY //(position verticale de la souris)
  x2 = width //(bord droit)
  y2 = mouseY //(même hauteur que la souris)
  line(0, mouseY, width, mouseY);

  // Dessine une ligne horizontale
  x1 = mouseX //(bord gauche)
  y1 = 0 //(position verticale de la souris)
  x2 = mouseX //(bord droit)
  y2 = height //(même hauteur que la souris)
  line(mouseX, 0, mouseX, height);
}
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  */

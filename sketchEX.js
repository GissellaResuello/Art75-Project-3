function setup() {
createCanvas(480, 480);
  angleMode(DEGREES);
}

function draw() {
  background (204);
  stroke('#DC78F2');
  background('#F2E5C8');
  rect(60, 60, 300, 300);
  arc(200, 280, 200, 50, 50, 120);
  arc(120, 200, 80, 80, 0, 180);
  arc(300, 200, 80, 80, 0, 180);
  arc(320, 100, 30, 150, 220, 90);
  arc(80, 100, 30, 150, 90, 340);

  fill('#FEE1F1');
    arc(320, 280, 80, 80, 0, 360);
    arc(80, 280, 80, 80, 0, 360);
  fill('#FCBAD1');

image(img, 250, 300);

  strokeWeight(5);
}

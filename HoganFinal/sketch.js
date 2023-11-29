let myScene;

function setup() {
  createCanvas(600, 400);
  myScene = new landscape();
}

function draw() {
  myScene.display();
}

class landscape {
  constructor() {
  }

   display() {
    //background stuff
    
    background(160, 235, 227);
    noStroke();
    fill(180, 235, 227)
    circle(300, 100, 400)
    fill(184, 242, 236)
    circle(300, 100, 300)
    fill(119, 186, 123); 
    ellipse(300, 230, 1000, 120)
    fill(59, 173, 66); 
    ellipse(300, 250, 1000, 120)
    fill(41, 140, 47); 
    ellipse(300, 280, 1000, 120)
    fill(28, 105, 33); 
    ellipse(300, 340, 800, 180)
    fill(18, 66, 21); 
    ellipse(300, 360, 1000, 120)
    fill(242, 236, 92)
    circle(300, 100, 80)
    fill(235, 228, 12)
    circle(300, 100, 70)
    
    //trees
    
    fill(18, 66, 21)
    ellipse(20, 270, 30, 50)
    fill(18, 66, 21)
    rect(15, 270, 10, 50)
    fill(18, 66, 21)
    ellipse(70, 280, 30, 50)
    fill(18, 66, 21)
    rect(65, 280, 10, 50)
    
    fill(28, 105, 33)
    ellipse(40, 240, 20, 40)
    fill(28, 105, 33)
    rect(38, 240, 5, 40)
    fill(28, 105, 33)
    ellipse(403, 230, 20, 40)
    fill(28, 105, 33)
    rect(400, 240, 5, 40)
    
    fill(41, 140, 47)
    ellipse(520, 210, 10, 25)
    fill(41, 140, 47)
    rect(519, 200, 2, 40)
    
    fill(41, 140, 47)
    ellipse(120, 205, 10, 25)
    fill(41, 140, 47)
    rect(119, 205, 2, 40)
   }
  }
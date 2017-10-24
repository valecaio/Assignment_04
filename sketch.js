function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background(220,104,73);
  
  //struttura sveglia
      
      var diameter = 10;
      if (width > height) {
      diameter = height;
      } else {
      diameter = width;
      }
  
    // blu
    fill(187,219,191);
    noStroke();
    ellipse(width/2,height/2,diameter-180);
    
    //ombra sul blu
    fill(163,190,167);
    noStroke();
    arc(width/2,height/2, diameter-180, diameter-180, -90, 90, OPEN);
    


    //quadrante bianco
    fill(255);
    noStroke();
    ellipse(width/2,height/2,diameter-300);
    
    //ombra sul bianco
    fill(234,234,234);
    noStroke();
    arc(width/2,height/2, diameter-300, diameter-300, -90, 90, OPEN);
    
    
    
    var sc= second();
    var mn = minute();
    var hr= hour();
    
    translate(width/2,height/2);
    rotate(-90);
   
  //lancetta secondi
    strokeWeight(2);
    stroke(220,104,73);
    noFill();
    var seconds = map(sc,0,60,0,360);
  
    push();
    rotate(seconds);
    line(0,0,width/7,0,seconds);
    pop();
    
  //lancetta minuti
    strokeWeight(5);
    stroke(78,70,72);
    noFill();
    var minutes = map(mn,0,60,0,360);
  
    push();
    rotate(minutes);
    line(0,0,width/6,0,minutes);
    pop();
    
  //lancetta ore
    strokeWeight(8);
    stroke(78,70,72);
    noFill();
    var hours = map(hr % 12,0,12,0,360);
 
    push();
    rotate(hours);
    line(0,0,width/9,0,hours);
    pop();
    
  //perno lancette
    fill(78,70,72);
    ellipse(0,0,15,15);
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
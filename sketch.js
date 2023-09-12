function setup() {
    createCanvas(1000, 1000);  // criando uma tela
    background("white");
  }
  
  function draw() {   // função criar
    
    stroke("blue"); // cor da borda
    fill("red"); // cor do preenchimento
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 50, 30); // retângulo
    }
  }
  
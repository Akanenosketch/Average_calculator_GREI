//We collect all the values needed
const practicasLaboratorio = document.getElementById("practicasLaboratorio");
const parcial1 = document.getElementById("primerParcial");
const parcial2 = document.getElementById("segundoParcial");
const tipoDeEvaluacion =  document.getElementById("evaluacion");
const nota = document.getElementById("notaFinal");

function calcularFinal(){
  if(tipoDeEvaluacion.value ==="Presencial"){
    let pLab = parseFloat(practicasLaboratorio.value);
    let p1 = parseFloat(parcial1.value);
    let p2 = parseFloat(parcial2.value);
    let notaFinal = pLab+p1+p2; 
    let notaHipotetica = 0;

    if((pLab<1||p1<2||p2<2) && notaFinal>=5){
      notaHipotetica = notaFinal;
      notaFinal = 4;
      nota.innerText = "Nota hipotética: " + notaHipotetica + "\n Nota real: " + notaFinal;
    }
      else if(isNaN(notaFinal)||(pLab<0 || p1<0 || p2<0)||(pLab>2|| p1>4||p2>4)){
          notaFinal = NaN;
          nota.innerText = "Revise los valores introducidos!!";
      }
    else {
      nota.innerText = " Nota exacta: " + notaFinal + " ";  
    }  

    if (notaFinal < 5.00) {
      nota.style.backgroundColor = "salmon";
    } else if (notaFinal < 6.00) {
      nota.style.backgroundColor = "coral";
    } else if (notaFinal < 8.00) {
      nota.style.backgroundColor = "#99ff99";
    } else if (notaFinal < 9.00) {
      nota.style.backgroundColor = "#99ccff";
    }else if (notaFinal >= 9.00) {
      nota.style.backgroundColor = "#9999ff";
    } else {
      nota.style.backgroundColor = "#ffffcc";
    }    
  }
  else if(tipoDeEvaluacion.value === "No Presencial"){
    let p2 = parseFloat(parcial2.value);    
    let notaFinal = p2;

    if(isNaN(p2)||p2<0||p2>10){
      p2 = NaN;
      nota.innerText = "Revise los valores introducidos!!";
    }else{
      nota.innerText =  "Nota exacta: " + p2 + "";
    }

    if (notaFinal < 5.00) {
      nota.style.backgroundColor = "salmon";
    } else if (notaFinal < 6.00) {
      nota.style.backgroundColor = "coral";
    } else if (notaFinal < 8.00) {
      nota.style.backgroundColor = "#99ff99";
    } else if (notaFinal < 9.00) {
      nota.style.backgroundColor = "#99ccff";
    }else if (notaFinal >= 9.00) {
      nota.style.backgroundColor = "#9999ff";
    } else {
      nota.style.backgroundColor = "#ffffcc";
    }      
  }
  else{
    nota.innerText = "Escoge un tipo de evaluación!!";
    nota.style.backgroundColor = "#ffffcc";
  }
}


  //Get button and add eventListener so it executes the function
  const button = document.getElementById("calc");
  button.addEventListener("click", calcularFinal);
//We collect all the values needed
const practicasLaboratorio = document.getElementById("practicasLaboratorio");
const parcial1 = document.getElementById("parcial1");
const parcial2 = document.getElementById("parcial2");
const tipoDeEvaluacion document.getElementById("evaluacion");
const nota = document.getElementById("notaFinal");
function calcularFinal(){
  if(tipoDeEvaluacion==="Presencial"){
    let pl = parseFloat(practicasLaboratorio.value);
    let p1 = parseFloat(parcial1.value);
    let p2 = parseFloat(parcial2.value);
    let notaFinal pl+p1+p2; 
    let notaHipotetica = 0;
    if((pl<1||p1<2||p2<2)&&notaFinal>=5){
      notaHipotetica = notaFinal;
      notaFinal = 4;
      nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
    else if(isNaN(notaFinal)||(ct<0 || cp<0 || regs<0|| p1<0||p2<0)||(ct>10 || cp>10 || regs>10|| p1>10||p2>10)){
          notaFinal = NaN
          nota.innerText = "Revise los valores introducidos!!";
      }
    else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";    
    }
       // Comprobamos la nota

    if (notaFinal.toFixed(2) < 5.00) {
        nota.style.backgroundColor = "salmon";
      } else if (notaFinal.toFixed(2) < 6.00) {
        nota.style.backgroundColor = "coral";
      } else if (notaFinal.toFixed(2) < 8.00) {
        nota.style.backgroundColor = "#99ff99";
      } else if (notaFinal.toFixed(2) < 9.00) {
        nota.style.backgroundColor = "#99ccff";
      } else {
        nota.style.backgroundColor = "#ffffcc";
      }    
    }
}

  //Get button and add eventListener so it executes the function
  const button = document.getElementById("calc");
  button.addEventListener("click", calcularFinal);
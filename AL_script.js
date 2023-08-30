
function calcularFinal(){
    //Notas de las pruebas quincenales
    const entrega1 = document.getElementById("entrega1");
    const entrega2 = document.getElementById("entrega2");
    const entrega3 = document.getElementById("entrega3");
    const entrega4 = document.getElementById("entrega4");
    const entrega5 = document.getElementById("entrega5");
    const entrega6 = document.getElementById("entrega6");

    // Parciales y examen final 
    const parcial1 = document.getElementById("parcial");
    const parcial2 = document.getElementById("parcial2");
    const examenFinal = document.getElementById("examenFinal");

    //Media de los cuestionarios
    const cuestionarios = document.getElementById("cuestionarios");

    //Otros elementos a obtener
    const tipodeEvaluacion = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    if(tipodeEvaluacion.value === "Presencial"){
        let mPruebas = (parseFloat(entrega1.value)+parseFloat(entrega2.value)+parseFloat(entrega3.value)+parseFloat(entrega4.value)+parseFloat(entrega5.value)+parseFloat(entrega6.value))/6;
        let mC = parseFloat(cuestionarios.value);
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let eF = parseFloat(examenFinal.value);
        let PEC = (((p1+p2)/2)*0.35)+(mPruebas*0.15)+(mC*0.10)+(eF*0.40);


        let notaFinal = Math.max( 0.6*PEC + 0.4*eF ,  eF + (3/50)*PEC*(10 - eF) );
        if (isNaN(notaFinal)||(mPruebas<0||mC<0||p1<0||p2<0||eF<0)||(mPruebas>10||mC>10||p1>10||p2>10||eF>10)){
            notaFinal = NaN;
            nota.innerText("Revisa los valores introducidos!!!");
        }
        else{
            nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";
        }
        if (notaFinal.toFixed(2) < 5.00) {
            nota.style.backgroundColor = "salmon";
          } else if (notaFinal.toFixed(2) < 6.00) {
            nota.style.backgroundColor = "coral";
          } else if (notaFinal.toFixed(2) < 8.00) {
            nota.style.backgroundColor = "#99ff99";
          } else if (notaFinal.toFixed(2) < 9.00) {
            nota.style.backgroundColor = "#99ccff";
          } else if (notaFinal.toFixed(2) >= 9.00) {
            nota.style.backgroundColor = "#9999ff";
          } else {
            nota.style.backgroundColor = "#ffffcc";
          }
    }
    else if(tipodeEvaluacion.value === "No Presencial"){
        let eF = parseFloat(examenFinal.value);

        let notaFinal = eF;
        if (isNaN(notaFinal)||eF<0||eF>10){
            notaFinal = NaN;
            nota.innerText("Revisa los valores introducidos!!!");
        }
        else{
            nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";
        }
        if (notaFinal.toFixed(2) < 5.00) {
            nota.style.backgroundColor = "salmon";
          } else if (notaFinal.toFixed(2) < 6.00) {
            nota.style.backgroundColor = "coral";
          } else if (notaFinal.toFixed(2) < 8.00) {
            nota.style.backgroundColor = "#99ff99";
          } else if (notaFinal.toFixed(2) < 9.00) {
            nota.style.backgroundColor = "#99ccff";
          } else if (notaFinal.toFixed(2) >= 9.00) {
            nota.style.backgroundColor = "#9999ff";
          } else {
            nota.style.backgroundColor = "#ffffcc";
          }

    }else{
        nota.innerText = "Escoge un tipo de evaluación!!";
        nota.style.backgroundColor = "#ffffcc";        
    }
}

const button = document.getElementById("calc");
button.addEventListener("click", calcularFinal);
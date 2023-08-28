function CalcularNotaMedia(){
    const tipodeEvaluacion = document.getElementById("evaluacion");
    const primerParcial = document.getElementById("primerParcial");
    const segundoParcial = document.getElementById("segundoParcial");
    const entrega1 = document.getElementById("entrega1");
    const entrega2 = document.getElementById("entrega2");
    const entregaMaxima = document.getElementById("entregaMaxima");
    const trabajoFinal = document.getElementById("trabajoFinal");

    const nota = document.getElementById("notaFinal");

    if (tipodeEvaluacion.value === "Presencial"){
        //We convert the numerical values to Float
        let p1 = parseFloat(primerParcial.value);
        let p2 = parseFloat(segundoParcial.value);
        let e1 = parseFloat(entrega1.value);
        let e2 = parseFloat(entrega2.value);
        let eM = parseFloat(entregaMaxima.value);
        let tF = parseFloat(trabajoFinal.value);

        //We calculate the final mark with the current values
        let notaFinal = (p1*0.30)+(p2*0.30)+(e1*0.10)+(e2*0.10)+(eM*0.10)+(tF*0.10);
        let notaHipotetica = 0;
        if((p1<2.5 || p2<2.5 || ((p1+p2)/2)<4 || e1<4||e2<4||eM<0||tF<0)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else{
            if(isNaN(notaFinal)||(p1<0 || p2<0 || e1<0|| e2<0||eM<0||tF<0)||(p1>10 || p2>10 || e1>10|| e2>10|| eM>10|| tF>10)){
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
          } else if (notaFinal.toFixed(2) >= 9.00) {
            nota.style.backgroundColor = "#9999ff";
          } else {
            nota.style.backgroundColor = "#ffffcc";
          }

    }else if(tipodeEvaluacion.value === "No Presencial"){
        let p1 = parseFloat(primerParcial.value);
        let eM = parseFloat(entregaMaxima.value);
        let tF = parseFloat(trabajoFinal.value);

        let notaFinal = (eM*0.10)+(tF*0.10)+(p1*0.80);
        let notaHipotetica;
        if((p1<4||eM<0||tF<0)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else{
            if(isNaN(notaFinal)||(p1<0 || eM<0 || tF<0)||(p1>10 || eM>10 || tF>10)){
                notaFinal = NaN;
                nota.innerText = "Revise los valores introducidos!!";
            }
            else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";
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
    else{
        nota.innerText = "Escoge un tipo de evaluación!!";
        nota.style.backgroundColor = "#ffffcc"
    }

}

const button = document.getElementById("calc");
button.addEventListener("click", CalcularNotaMedia);

function calcularFinal(){
    //Notas de las entregas
    const entrega1 = document.getElementById("entrega1");
    const entrega2 = document.getElementById("entrega2");
    const entrega3 = document.getElementById("entrega3");
    const entrega4 = document.getElementById("entrega4");
    const entrega5 = document.getElementById("entrega5");
    const entrega6 = document.getElementById("entrega6");

    // Notas de las prácticas con Maxima
    const practica1 = document.getElementById("practica1");
    const practica2 = document.getElementById("practica2");
    const practica3 = document.getElementById("practica3");
    const practica4 = document.getElementById("practica4");

    // Nota trabajo final
    const trabajoFinal = document.getElementById("trabajoFinal");

    // Parciales y examen final 
    const parcial1 = document.getElementById("primerParcial");
    const parcial2 = document.getElementById("segundoParcial");
    const parcial3 = document.getElementById("tercerParcial");
    const examenFinal = document.getElementById("examenFinal");

    //Otros elementos a obtener
    const tipodeEvaluacion = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    if(tipodeEvaluacion.value === "Presencial"){
        let mEntregas = (parseFloat(entrega1.value)+parseFloat(entrega2.value)+parseFloat(entrega3.value)+parseFloat(entrega4.value)+parseFloat(entrega5.value)+parseFloat(entrega6.value))/6;
        let mMaxima = (parseFloat(practica1.value)+ parseFloat(practica2.value)+ parseFloat(practica3.value)+ parseFloat(practica4.value))/4;
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let p3 = parseFloat(parcial3.value);
        let eF = parseFloat(examenFinal.value);
        let tF = parseFloat(trabajoFinal.value);

        let notaFinal = (mEntregas*0.15) + (mMaxima*0.10)+(eF*0.40)+(tF*0.10)+(((p1+p2+p3)/3)*0.25);
        if (isNaN(notaFinal)||(mMaxima<0||mEntregas<0||p1<0||p2<0||p3<0||eF<0||tF<0)||(mMaxima>10||mEntregas>10||p1>10||p2>10||p3>10||eF>10||tF>10)){
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
        let tF = parseFloat(trabajoFinal.value);
        let eM = parseFloat(parcial3.value);

        let notaFinal = (eF*0.80)+(tF*0.10)+(eM*0.10);
        if (isNaN(notaFinal)||(eM<0||eF<0||tF<0)||(eM>10||eF>10||tF>10)){
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
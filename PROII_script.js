function calcularFinal(){
    //Obtenemos los valores introducidos por el usuario
    const practicasLaboratorio = document.getElementById("practicasLab");
    const parcial1 = document.getElementById("parcial1");
    const parcial2 = document.getElementById("parcial2");
    const programacion1 = document.getElementById("prog1");
    const programacion2 = document.getElementById("prog2");

    // Obtenemos otros elementos necesarios
    const tipoDeEvaluacion = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    // Comprobamos el tipo de evaluación y calculamos la nota final
    if(tipoDeEvaluacion.value == "Presencial"){
        let pL = parseFloat(practicasLaboratorio.value);
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let eP1 = parseFloat(programacion1.value);
        let eP2 = parseFloat(programacion2.value);

        let notaFinal = (pL*0.20)+(p1*0.20)+(p2*0.20)+(eP1*0.20)+(eP2*0.20);
        let notaHipotetica; // Solo se usa en el caso de que uno de los minimos no se cumpla

        if((p1<4||p2<4||eP1<4||eP2<4)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4.00;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }else if((isNaN(notaFinal))||(pL<0||p1<0||p2<0||eP1<0||eP2<0)||(pL>10||p1>10||p2>10||eP1>10||eP2>10)){
            notaFinal = NaN;
            nota.innerText = "Revisa los valores introducidos!!";
        }
        else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";

        // Cambiamos el color de nota dependiendo de notaFinal
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

    }else if(tipoDeEvaluacion.value === "No Presencial"){
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let eP1 = parseFloat(programacion1.value);
        
        let notaFinal = (p1*0.25)+(p2*0.25)+(eP1*0.50);
        let notaHipotetica;

        if((p1<4||p2<4||eP1<4)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4.00;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }else if((isNaN(notaFinal))||(p1<0||p2<0||eP1<0)||(p1>10||p2>10||eP1>10)){
            notaFinal = NaN;
            nota.innerText = "Revisa los valores introducidos!!";
        }
        else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";

        // Cambiamos el color de nota dependiendo de notaFinal
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

// Obtenemos al botón y le añadimos para que detecte si alguien pulse el botón
const button = document.getElementById("calc");
button.addEventListener("click", calcularFinal);
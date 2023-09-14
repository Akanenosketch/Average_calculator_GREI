function calcularFinal(){
    // Obtenemos los inputs del usuario
    const parcial1 = document.getElementById("parcial1");
    const parcial2 = document.getElementById("parcial2");
    const parcial3 = document.getElementById("parcial3");
    const parcial4 = document.getElementById("parcial4");
    const prog = document.getElementById("actividades");

    // Obtenemos otros elementos necesarios
    const tipoDeEvaluacion = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    if(tipoDeEvaluacion.value === "Presencial"){
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let p3 = parseFloat(parcial3.value);
        let p4 = parseFloat(parcial4.value);
        let prac = parseFloat(prog.value);

        let notaFinal = (p1*0.25)+(p2*0.30)+(p3*0.15)+(p4*0.15)+(prac*0.15);
        let notaHipotetica;

        if((p1<4||p2<4||p3<4||p4<4)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4.00;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }else if((isNaN(notaFinal))||(p1<0||p2<0||p3<0||p4<0||prac<0)||(p1>10||p2>10||p3>10||p4>10||prac>10)){
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
    }
    else if(tipoDeEvaluacion.value === "No Presencial"){
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial3.value);

        let notaFinal = (p1*0.65)+(p2*0.35);
        let notaHipotetica;

        if((p1<4||p2<4)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4.00;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }else if((isNaN(notaFinal))||(p1<0||p2<0)||(p1>10||p2>10)){
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

// Obtenemos el botón
const button = document.getElementById("calc");
button.addEventListener("click", calcularFinal);
function calcularNota(){
    //Obtenemos los inputs introducidos por el usuario
    const parcial1 = document.getElementById("parcial1");
    const parcial2 = document.getElementById("parcial2");
    const parcial3 = document.getElementById("parcial3");

    //Obtenemos otrso elementos necesarios
    const tipoDeEvaluacion = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    if(tipoDeEvaluacion.value == "Presencial"){
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let p3 = parseFloat(parcial3.value);

        let notaFinal = (p1/3)+(p2/3)+(p3/3);
        let notaHipotetica;

        if((p1<3.5 || p2<3.5 || p3<3.5)&& notaFinal >= 5){
            notaHipotetica = notaFinal;
            notaFinal = 3.5;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else if(isNaN(notaFinal)||(p1<0 || p2<0 || p3<0)||(p1>10 || p2>10 || p3>10)){
            notaFinal = NaN;
            nota.innerText = "Revise los valores introducidos!!";
        }
        else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";

        //Cambiamos el color dependiendo de la nota
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

    }else if(tipoDeEvaluacion.value == "No Presencial"){
        let notaFinal = docuemnt.getElementById("parcial3");

        if(isNaN(notaFinal)||eF<0||eF>10){
            notafinal = NaN;
            nota.innerText = "Revise los valores introducidos!!";
        }
        else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";
    
        //Cambiamos el color dependiendo de la nota
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
button.addEventListener("click", calcularNota);
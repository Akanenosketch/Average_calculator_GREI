function calcularFinal(){
    // Obtenemos los valores introducidos por el usuario
    const practicasLaboratorio = document.getElementById("practicasLaboratorio");
    const parcial1 = document.getElementById("parcial1");
    const parcial2 = document.getElementById("parcial2");
    const defensa1 = document.getElementById("defensa1");
    const defensa2 = document.getElementById("defensa2");
    const defensa3 = document.getElementById("defensa3");
    const proyecto = document.getElementById("examenProyecto");

    //Obtenemos otros elementos 
    //importantes para el calculo de la nota: opción y nota resultante
    const tipoDeEvaluacion = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    if(tipoDeEvaluacion.value === "Presencial"){
        let pL = parseFloat(practicasLaboratorio.value);
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let d1 = parseFloat(defensa1.value);
        let d2 = parseFloat(defensa2.value);
        let d3 = parseFloat(defensa3.value);
        let eP = parseFloat(proyecto.value);

        let notaFinal = (0.05*pL)+(p1*0.30)+(p2*0.2)+(((d1+d2+d3)/3)*0.20)+(eP*0.25);
        let notaHipotetica = 0;

        if((((p1*0.3)+(p2*0.2))<2.5 || eP<5) && notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else{
            if(isNaN(notaFinal)||(p1<0 || p2<0 || pL<0 || d1<0 || d2<0 || d3<0 || eP<0)||(p1>10 || p2>10 || pL>10 || d1>10 || d2>10 || d3>10 || eP>10)){
                notaFinal = NaN;
                nota.innerText = "Revise los valores introducidos!!";
            }
            else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";
        }

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

    }else if(tipoDeEvaluacion.value === "No Presencial"){
        let eT = parseFloat(parcial2.value);
        let dP = ((parseFloat(defensa1.value)+parseFloat(defensa2.value)+parseFloat(defensa3.value))/3);
        let eP = parseFloat(proyecto.value);

        let notaFinal = (eT*0.55)+(dP*0.20)+(eP*0.25);
        let notaHipotetica;

        if((eT<5||eP<5)||notaFinal>=5){
          notaHipotetica = notaFinal;
          notaFinal = 4;
          nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else if(isNaN(notaFinal)||(eT<0 || dP<0 || eP<0 )||(eT>10 || dP>10 || eP>10)){
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
    }else if(tipoDeEvaluacion.value === "Fin de carrera"){
        //La nota final solo depende del examen de Fin de Carrera
        let notaFinal = parseFloat(parcial2.value);
        if(isNaN(notaFinal)||notaFinal<0||notaFinal>10){
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

    }else{
        nota.innerText = "Escoge un tipo de evaluación!!";
        nota.style.backgroundColor = "#ffffcc";
    }

}

//Obtener button y hacer que escuche a las interacciones del usuario
const button = document.getElementById("calc");
button.addEventListener("click", calcularFinal);
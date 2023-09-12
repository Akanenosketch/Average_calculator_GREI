function calcularFinal(){
    // Obtenemos todos los valores de los inputs (aun si son NaN)
    const parcial1 = document.getElementById("parcial1");
    const parcial2 = document.getElementById("parcial2");
    const lab1 = document.getElementById("MS");
    const lab2 = document.getElementById("8085");

    // Obtenemos otros elementos necesarios
    const tipoDeEvaluacion = document.getElementById("evaluacion"); 
    const nota = document.getElementById("notaFinal");

    // Comprobamos tipoDeEvaluacion 
    if(tipoDeEvaluacion.value === "Presencial"){
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let l1 = parseFloat(lab1.value);
        let l2 = parseFloat(lab2.value);

        let notaFinal = (p1*0.30)+(p2*0.30)+(l1*0.20)+(l2*0.20);
        let notaHipotetica;
        if((p1<3||p2<3||l1<3||l2<3)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4.9;  //4.9 en continua
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }else if(isNaN(notaFinal)||(p1<0||p2<0||l1<0||l2<0)||(p1>10||p2>10||l1>10||l2>10)){
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

    }else if(tipoDeEvaluacion.value === "No Presencial"){
        let eF = parseFloat(parcial2.value);
        let eP = parseFloat(lab2.value);

        let notaFinal = (eF*0.60)+(eP*0.40);
        let notaHipotetica;
        
        if ((eF<3||eP<3)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4;  //4 en global
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }else if((isNaN(notaFinal))||(eP<0||eF<0)||(eP>10||eF>10)){
            notaFinal = NaN;
            nota.innerText = "Revise los valores introducidos!!";
        }
        else nota.innerText = (Math.round( notaFinal * 10 ) / 10).toFixed(1) + " (Nota exacta: " + notaFinal + " )";

        // Cambiamos el color dependiendo de la nota
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
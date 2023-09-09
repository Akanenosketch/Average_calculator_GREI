function calcularFinal(){
    // Obtenemos los inputs
    const examen1 = document.getElementById("ex1");
    const examen2 = document.getElementById("ex2");
    const examen3 = document.getElementById("ex3");
    const presentacion = document.getElementById("ex4");

    //Obtenemos los elementos necesarios
    const practicas = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    if(practicas.value === "Si"){
        nota.innerText = "Si no la has cagado mucho apruebas";
        nota.style.backgroundColor = "#99ff99";
    }else if(practicas.value === "No"){
        let ex1 = parseFloat(examen1.value);
        let ex2 = parseFloat(examen2.value);
        let ex3 = parseFloat(examen3.value);
        let p = parseFloat(presentacion.value);

        let notaFinal = (ex1*0.40)+(ex2*0.05)+(ex3*0.20)+(p*0.35);
        let notaHipotetica;

        if(( ex1<5 || ex2<5 || ex3<5 || p<5 ) && notaFinal>=5 ){
            notaHipotetica = notaFinal;
            notaFinal = 4.00;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else if((isNaN(notaFinal)) || (ex1<0||ex2<0||ex3<0||p<0) || (ex1>10||ex2>10||ex3>10||p>10)){
            notaFinal = NaN;
            nota.innerText = "Revise los valores introducidos !!";
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

const button = document.getElementById("calc");
button.addEventListener("click", calcularFinal);


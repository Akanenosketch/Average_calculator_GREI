
function CalcularNotaMedia(){
    const tipodeEvaluacion = document.getElementById("evaluacion");
    const cuestionariosTeoria = document.getElementById("cuestionariosTeoria");
    const cuestionariosPractica = document.getElementById("cuestionariosPractica");
    const prueba1 = document.getElementById("examenProgramacionI");
    const prueba2 = document.getElementById("examenProgramacionII");
    const reg1 = document.getElementById("reg1");
    const reg2 = document.getElementById("reg2");
    const reg3 = document.getElementById("reg3");

    const nota = document.getElementById("notaFinal");

    if (tipodeEvaluacion.value === "Presencial"){
        //We convert the numerical values to Float
        let regs = (parseFloat(reg1.value) + parseFloat(reg2.value) + parseInt(reg3.value))/3;
        let ct = parseFloat(cuestionariosTeoria.value);
        let cp = parseFloat(cuestionariosPractica.value);
        let p1 = parseFloat(prueba1.value);
        let p2 = parseFloat(prueba2.value);

        //We calculate the final mark with the current values
        let notaFinal = (ct*0.10)+(cp*0.10)+(regs*0.15)+(p1*0.25)+(p2*0.40);
        let notaHipotetica = 0;
        if((ct<5 || cp<5 || regs<5|| p1<5||p2<5)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else{
            if(isNaN(notaFinal)||(ct<0 || cp<0 || regs<0|| p1<0||p2<0)||(ct>10 || cp>10 || regs>10|| p1>10||p2>10)){
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

    }else if(tipodeEvaluacion.value === "No Presencial"){
        let ct = parseFloat(cuestionariosTeoria.value);
        let cp = parseFloat(cuestionariosPractica.value);
        let p1 = parseFloat(prueba1.value);

        let notaFinal = (ct*0.10)+(cp*0.10)*(p1*0.80);
        let notaHipotetica;
        if((ct<5||cp<5||p1<5)&& notaFinal>=5){
            notaHipotetica = notaFinal;
            notaFinal = 4;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else{
            if(isNaN(notaFinal)||(ct<0 || cp<0 || regs<0|| p1<0||p2<0)||(ct>10 || cp>10 || regs>10|| p1>10||p2>10)){
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
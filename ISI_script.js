function calcularFinal(){
    // Obtenemos los inputs introducidos por el usuario
    const parcial1 = document.getElementById("parcial1");
    const parcial2 = document.getElementById("parcial2");
    const parcial3 = document.getElementById("parcial3");
    const parcial4 = document.getElementById("parcial4");
    const game = document.getElementById("gamificacion");

    // Obtenermos otros elementos necesarios
    const tipoDeEvaluacion = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");
    
    if(tipoDeEvaluacion.value == "Presencial"){
        let p1 = parseFloat(parcial1.value);
        let p2 = parseFloat(parcial2.value);
        let p3 = parseFloat(parcial3.value);
        let p4 = parseFloat(parcial4.value);
        let g = parseFloat(game.value);

        let nivel = calcularNivel(g);


        let notaFinal = (p1*0.10)+(p2*0.10)+(p3*0.25)+(p4*0.25)+(nivel*0.30);
        let notaHipotetica;

        if(g<175){
            nota.innerText = "Tienes que ir a global o recuperar con examen final! No tienes el 70% de los PM necesarios par aprobar en continua";
        }
        else if((p1<5||p2<5||p3<5||p4<5) && notaFinal >= 5){
            notaHipotetica = notaFinal;
            notaHipotetica = 4.9;
            nota.innerText = "Nota hipotética: " + (Math.round( notaHipotetica * 10 ) / 10).toFixed(1) + "(Nota exacta : " + notaHipotetica + ")\n Nota real: " + notaFinal;
        }
        else if(isNaN(notaFinal)||(p1<0||p2<0||p3<0||p4<0||g<0)||(p1>10||p2>10||p3>10||p4>10)){
            notaFinal = NaN;
            nota.innerText = "Revise los valores introducidos!!"
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

    }else if(tipoDeEvaluacion.value == "No Presencial"){
        let p1 = document.getElementById("parcial1");
        let p2 = document.getElementById("parcial3");

        let NotaFinal = (p1*0.40)+(p2*0.60);
        let notaHipotetica;

        if((p1<5||p2<5) && notaFinal >= 5){
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

function calcularNivel(g){
    if(g<25 && g>=0) return 1;
    else if (g<60 && g>=25) return 2;
    else if (g<90 && g>=60) return 3;
    else if (g<130 && g>= 90) return 4;
    else if (g<155 && g>=130) return 5;
    else if (g<175 && g>=155) return 6;
    else if (g<200 && g>=175) return 7;
    else if (g<225 && g>=200) return 8;
    else if (g<250 && g>=225) return 9;
    else return 10;
}

// Obtenemos el botón

const button = document.getElementById("calc");
button.addEventListener("click", calcularFinal);
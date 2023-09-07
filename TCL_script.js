function calcularFinal(){
    //Obtenemos los elementos necesarios
    const practicas = document.getElementById("evaluacion");
    const nota = document.getElementById("notaFinal");

    if(practicas.value === "Si"){
        nota.innetText = "A menos que la cagues mucho o no entregues cosas apruebas";
        nota.style.backgroundColor = "#99ff99";
    }else if(practicas.value === "No"){
        nota.innerText = "Mucha suerte en el examen";
        nota.style.backgroundColor = "salmon";
    }else{
        nota.innerText = "Escoge un tipo de evaluación!!";
        nota.style.backgroundColor = "#ffffcc";
    }

}

const button = document.getElementById("calc");
button.addEventListener("click", calcularFinal);


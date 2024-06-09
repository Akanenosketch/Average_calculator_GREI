var coll = document.getElementsByClassName("collapsible");
var i;

// Collapsable menús with all the subjects
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var contenido = this.nextElementSibling;
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null;
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
    }
  });
}

//Actions for when one of the subject's buttons is pressed 
//For the non-implemented ones it will show the dragon 404 page
//Obtain the document area where all the modifications will be made onto
var doc = document.getElementById("main");
//Obtain all the buttons by their IDs and add their respective listeners --> Someone will kill me for this I'll refractor it later
//Asignaturas de primero
var buttonAM = document.getElementById("AM");
buttonAM.addEventListener("click", unimplemented);
var buttonFMI = document.getElementById("FMI");
buttonFMI.addEventListener("click", unimplemented);
var buttonSD = document.getElementById("SD");
buttonSD.addEventListener("click", unimplemented);
var buttonPROI = document.getElementById("PROI");
buttonPROI.addEventListener("click", unimplemented);
var buttonPROII = document.getElementById("PROII");
buttonPROII.addEventListener("click", unimplemented);
var buttonAEDI = document.getElementById("AEDI");
buttonAEDI.addEventListener("click", unimplemented);
var buttonAL = document.getElementById("AL");
buttonAL.addEventListener("click", unimplemented);
var buttonTCL = document.getElementById("TCL");
buttonTCL.addEventListener("click", unimplemented);
var buttonACI = document.getElementById("ACI");
buttonACI.addEventListener("click", unimplemented);

//Asignaturas de segundo
var buttonEST = document.getElementById("EST");
buttonEST.addEventListener("click", unimplemented);
var buttonISI = document.getElementById("ISI");
buttonISI.addEventListener("click", unimplemented);
var buttonSOI = document.getElementById("SOI");
buttonSOI.addEventListener("click", unimplemented);
var buttonAEDII = document.getElementById("AEDII");
buttonAEDII.addEventListener("click", unimplemented);
var buttonACII = document.getElementById("ACII");
buttonACII.addEventListener("click", unimplemented);
var buttonSOII = document.getElementById("SOII");
buttonSOII.addEventListener("click", unimplemented);
var buttonISII = document.getElementById("ISII");
buttonISII.addEventListener("click", unimplemented);
var buttonBDI = document.getElementById("BDI");
buttonBDI.addEventListener("click", unimplemented);
var buttonAP = document.getElementById("AP");
buttonAP.addEventListener("click", unimplemented);
var buttonRCI = document.getElementById("RCI");
buttonRCI.addEventListener("click", unimplemented);

//Asignaturas de tercero
var buttonLC = document.getElementById("LC");
buttonLC.addEventListener("click", unimplemented);
var buttonRCII = document.getElementById("RCII");
buttonRCII.addEventListener("click", unimplemented);
var buttonBDII = document.getElementById("BDII");
buttonBDII.addEventListener("click", unimplemented);
var buttonIU = document.getElementById("IU");
buttonIU.addEventListener("click", unimplemented);
var buttonCD = document.getElementById("CD");
buttonCD.addEventListener("click", unimplemented);
var buttonDGP = document.getElementById("DGP");
buttonDGP.addEventListener("click", unimplemented);
var buttonTALF = document.getElementById("TALF");
buttonTALF.addEventListener("click", unimplemented);
var buttonCDI = document.getElementById("CDI");
buttonCDI.addEventListener("click", unimplemented);
var buttonSI = document.getElementById("SI");
buttonSI.addEventListener("click", unimplemented);
var buttonHAE = document.getElementById("HAE");
buttonHAE.addEventListener("click", unimplemented);

//Asignaturas cuarto --> Some of them might not need a calculator
var buttonSSI = document.getElementById("SSI");
buttonSSI.addEventListener("click", unimplemented);
var buttonABP = document.getElementById("ABP");
buttonABP.addEventListener("click", unimplemented);
var buttonSN = document.getElementById("SN");
buttonSN.addEventListener("click", unimplemented);
var buttonDIA = document.getElementById("DIA");
buttonDIA.addEventListener("click", unimplemented);
var buttonDASS = document.getElementById("DASS");
buttonDASS.addEventListener("click", unimplemented);
var buttonMAIS = document.getElementById("MAIS");
buttonMAIS.addEventListener("click", unimplemented);
var buttonTSW = document.getElementById("TSW");
buttonTSW.addEventListener("click", unimplemented);
var buttonCCD = document.getElementById("CCD");
buttonCCD.addEventListener("click", unimplemented);
var buttonDM = document.getElementById("DM");
buttonDM.addEventListener("click", unimplemented);
var buttonDAI = document.getElementById("DAI");
buttonDAI.addEventListener("click", unimplemented);
var buttonPEI = document.getElementById("PEI");
buttonPEI.addEventListener("click", unimplemented);
var buttonPEII = document.getElementById("PEII");
buttonPEII.addEventListener("click", unimplemented);
var buttonFEJTIC = document.getElementById("FEJTIC");
buttonFEJTIC.addEventListener("click", unimplemented);
var buttonALS = document.getElementById("ALS");
buttonALS.addEventListener("click", unimplemented);
var buttonDAA = document.getElementById("DAA");
buttonDAA.addEventListener("click", unimplemented);
var buttonTAMI = document.getElementById("TAMI");
buttonTAMI.addEventListener("click", unimplemented);
var buttonTC = document.getElementById("TC");
buttonTC.addEventListener("click", unimplemented);
var buttonTFG = document.getElementById("TFG");
buttonTFG.addEventListener("click", unimplemented);

//Otros botones
var Inicio = document.getElementById("Inicio");
Inicio.addEventListener("click", startPage);
var Instrucciones = document.getElementById("Instrucciones");
Instrucciones.addEventListener("click", howTo);
var Otros = document.getElementById("Otros");
Otros.addEventListener("click", otherLinks);

//Other buttons
function startPage() {
  //Reloads the page to it's original status
  doc.innerHTML = `<p>In progress, you can look around as much as you want</p>`

}

function howTo() {
  doc.innerHTML = `<h1>Instrucciones</h1>
                <p>Solamente escoge la asignatura que quieras dentro del menú de la derecha, pones las notas
                    y ya se calcula la nota!
                </p>
                <h2>Nota importante:</h2>
                <p>Por ahora estas calculadoras no calcularan las nota necesaria para superar una asignatura</p>
                <span style="color: rgba(109, 109, 109)">No me da la cabeza para todo, añadiré más cosas más tarde</span>`

}

function otherLinks() {
  //Only discord for now
  doc.innerHTML = `
        <h1 style="margin-bottom: 5px; "><p>Otros links</p></h1>
        <span style="text-align:center; font-weight:700;">[Otros links que pueden resultar de utilidad (o no) para el usuario]</span>
        <h3><a style="color: white; font-size:10px;" href="https://herta.morian.icu/">[Si soy masoquista buenos días]</a></h3>    
        <h4>El discord (no oficial) de la ESEI!! (los de la uvigo no son tan enrollados)</h4>
        <iframe src="https://discord.com/widget?id=1091795781549305917&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <h2>Página web de la ESEI y de la UVigo</h2>
        <p><a href="https://esei.uvigo.es/es/">ESEI</a> y <a href="https://www.uvigo.gal/">UVigo</a></p>`

}

//Unimplemented error
function unimplemented() {
  doc.innerHTML = " <h1>Lo siento, la calculadora que has querido acceder aún no ha sido implementada</h1> <h3>Here, have a spinning dragon</h3> <img src='spinning deagon.gif' alt='A spinning dragon!' >";
}
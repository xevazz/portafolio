var listaPalabras = ["HTML", "CSS", "ARRAY"];
var numeroAleatorio = parseInt(Math.random() * (0 - listaPalabras.length) * -1);
var contadorPalabras = 0;
var contadorErrores = 0;
var error = false;
var siEsta = false;
var txtFallos = " ";
var iniciar = document.querySelector(".btn-btnIniciar");


function nuevoJuego() {
    document.getElementById("botonera").style.display = "none";
    document.getElementById("dibujooculto").style.display = "block";
    document.getElementById("botoneraOculta").style.display = "block";
    document.getElementById("lineasEspacios").style.display = "block";
    document.getElementById("oculto").style.display = "block";

    var leerteclas = document.getElementById("leerteclas");
    leerteclas.focus();

    lineasEspacios()

}


iniciar.addEventListener("click", nuevoJuego, false);

//////////////////////////////////////funcion nuevo juego//////////////////////////////////////////////////////////

function lineasEspacios() {
    let tamaño = listaPalabras[numeroAleatorio].length;
    const obj = document.getElementById("lineasEspacios");
    let txtfinal = "<div  id='letras'>";

    for (let index2 = 0; index2 < tamaño; index2++) {
        let numeroInput = 10 + index2;
        txtfinal = txtfinal + "<input value =' ' readonly=»readonly type='text' id='txt" + numeroInput + "'  style=' border:none; text-align: center; margin: 0 auto; width: 65px; font-size: 40px; color:#0A3871; height: 38px;  margin-right: 20px;'>";
    }
    txtfinal = txtfinal + "</div>";
    txtfinal = txtfinal + "<div  id='lineas'>";

    for (let index = 0; index < tamaño; index++) {
        let numeroRestangulo = 10 + index;
        txtfinal = txtfinal + "<canvas id='rectangulo" + numeroRestangulo + "' style='background-color: #0A3871;  margin: 0 auto; width: 70px; height: 5px; border-radius: 25px; margin-right: 20px;'></canvas>";
    };
    txtfinal = txtfinal + "</div>";
    document.getElementById("lineasEspacios").innerHTML = txtfinal;

}


//////////////////////////////////////////FUNCION LINEAS Y ESPACIOS/////////////////////////////////////////////////////


function pata(event) {
    var codigo = event.keyCode;

    for (let index3 = 0; index3 < listaPalabras[numeroAleatorio].length; index3++) {
        let numeroInput = 10 + index3;
        var normal = listaPalabras[numeroAleatorio][index3].charCodeAt(0);
        if (normal == codigo) {
            var traerinput = document.getElementById("txt" + numeroInput);
            traerinput.value = listaPalabras[numeroAleatorio][index3];
            contadorPalabras++;
            siEsta = true;
        } else {
            error = true;
        }

    }
    if (error && siEsta == false) {
        error = false;
        siEsta = false;
        contadorErrores++;
        console.log(String.fromCodePoint(codigo));
        añadirFallos(String.fromCodePoint(codigo));
        if (contadorErrores == 1) {
            document.getElementById("parte1").style.display = "block";
        } else if (contadorErrores == 2) {
            document.getElementById("parte2").style.display = "block";
        } else if (contadorErrores == 3) {
            document.getElementById("parte3").style.display = "block";
        } else if (contadorErrores == 4) {
            document.getElementById("parte4").style.display = "block";
        } else if (contadorErrores == 5) {
            document.getElementById("parte5").style.display = "block";
            document.getElementById("txtPerdiste").style.display = "block";
        }
    }
    error = false;
    siEsta = false;

    if (contadorPalabras == listaPalabras[numeroAleatorio].length) {
        document.getElementById("parte0").style.display = "none";
        document.getElementById("parte1").style.display = "none";
        document.getElementById("parte2").style.display = "none";
        document.getElementById("parte3").style.display = "none";
        document.getElementById("parte4").style.display = "none";
        document.getElementById("parte5").style.display = "none";
        document.getElementById("txtGanaste").style.display = "block";
    }

}
function añadirFallos(fallo) {
    var esta = false;
    var noEsta = false;

    for (let index4 = 0; index4 < txtFallos.length; index4++) {

        if (txtFallos[index4] == fallo) {

            esta = true;
        } else {

            noEsta = true;
        }
    }
    if (noEsta && esta == false) {

        txtFallos = txtFallos.concat("  " + fallo);

        document.getElementById("letrasFallidas").value = txtFallos;
    }
}

////////////////////////////////////////////boton desistir//////////////////////////////////////////////////////////////////

var iniciar2 = document.querySelector(".btn-btnDesistir");
function refrescarPagina() {
    location.reload();
}
iniciar2.addEventListener("click", refrescarPagina, false);

////////////////////////////////////////////boton nuevo juego//////////////////////////////////////////////////////////////////

var btnNuevo = document.querySelector(".btn-btnNuevaPartida");

function iniciarNuevoJuego() {
    nuevoJuego();
    numeroAleatorio = parseInt(Math.random() * (0 - listaPalabras.length) * -1);
    var contadorPalabras = 0;
    var contadorErrores = 0;
    var error = false;
    var siEsta = false;
    var txtFallos = " ";
}
btnNuevo.addEventListener("click", iniciarNuevoJuego, false);
///toca meter todo esto en una funcion pero toca traer todo el html
/////////////////////////////////////////////////////////////////
var btnNueva = document.querySelector(".btn-btnNueva");
function mostrarAgregarPalabra() {
    document.getElementById("botonera").style.display = "none";
    document.getElementById("oculto2").style.display = "block";
}
btnNueva.addEventListener("click", mostrarAgregarPalabra, false);

/////////////////////////////////////////////////////////////////////////////////////////
var btnAgregar = document.querySelector(".btn-btnAgregar");

function agregarPalabra() {
    var txtPalabra = document.getElementById("escribirNuevaPalabra").value; 
    listaPalabras.push(txtPalabra);
    console.log(listaPalabras);
}

btnAgregar.addEventListener("click", agregarPalabra, false);

///////////////////////////////////////////////////////////////////////////////
var btnCancelar = document.querySelector(".btn-btnCancelar");

function cancelar() {
    document.getElementById("botonera").style.display = "block";
    document.getElementById("oculto2").style.display = "none";
}
btnCancelar.addEventListener("click", cancelar, false);

//listaPalabras
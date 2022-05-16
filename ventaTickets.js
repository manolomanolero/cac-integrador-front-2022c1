const textoBaseTotalAPagar = "Total a Pagar: $";
const descuentoCategoria = {
    Estudiante: 0.8,
    Trainee: 0.5,
    Junior: 0.15
};
const valorTicket = 200;
let totalAPagar = "";

let parrafo = document.getElementById("montoTotal");
let categoria = document.getElementById("categoriaParticipante");
let botonCalcular = document.getElementById("calcularMonto");
let cantidadParticipantes = document.getElementById("cantidadParticipantes");
let botonBorrar = document.getElementById("borrarForm");



function calcularTickets(evt) {
    let participantesActuales = cantidadParticipantes.value;
    if (participantesActuales == null || participantesActuales < 0 || !Number.isInteger(participantesActuales/1)) {
        parrafo.innerText = "Ingresó una cantidad de participantes no válida";
    } else {
        totalAPagar = cantidadParticipantes.value * (valorTicket * (1 - descuentoSegunCategoria()));
        parrafo.innerText = textoBaseTotalAPagar + totalAPagar;
    }
    return;
}

function descuentoSegunCategoria() {
    let descuento = 0;
    switch (categoria.value) {
        case "Estudiante":
            descuento = descuentoCategoria.Estudiante;
            break;
        case "Trainee":
            descuento = descuentoCategoria.Trainee;
            break;
        case "Junior":
            descuento = descuentoCategoria.Junior;
    }
    return descuento;
}

function borrarFormulario(evt) {
    totalAPagar = "";
    parrafo.innerText = textoBaseTotalAPagar;
    return;
}


botonCalcular.onclick = calcularTickets;
botonBorrar.onclick = borrarFormulario;
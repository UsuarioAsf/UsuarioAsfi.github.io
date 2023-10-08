// Obtener elementos del DOM
var abrirModalBtn = document.getElementById('abrirModalBtn');
var cerrarModalBtn = document.getElementById('cerrarModalBtn');
var miModal = document.getElementById('miModal');
var micontrol = document.getElementById('controls');
var minav = document.getElementById('navbar');


var bt1 = document.getElementById('infoBtn');
var bt2 = document.getElementById('itinerarioBtn');
var bt3 = document.getElementById('ofertasBtn');
var aux = 0;
// Función para abrir el modal
var imagen = document.getElementById('imgportada');
function panelFlotante(i, x) {
    if (i == 1) imagen.src = 'img/marte.png';
    if (i == 2) imagen.src = 'img/jupiter.png';
    if (i == 3) imagen.src = 'img/saturno.png';
    aux = i;
    miModal.style.setProperty('display', 'block', 'important');
    micontrol.style.setProperty('display', 'none', 'important');
    minav.style.setProperty('display', 'none', 'important');
}

// Función para cerrar el modal
cerrarModalBtn.onclick = function () {
    miModal.style.setProperty('display', 'none', 'important');
    micontrol.style.setProperty('display', 'block', 'important');
    minav.style.setProperty('display', 'block', 'important');

};

// Función para guardar la descripción (puedes personalizarla según tus necesidades)
var guardarDescripcionBtn = document.getElementById('guardarDescripcionBtn');
var descripcion = document.getElementById('descripcion');


bt1.onclick = function () {
    if (aux == 1) imagen.src = 'img/marteEdu.png';
    if (aux == 2) imagen.src = 'img/jupiterEdu.png';
    if (aux == 3) imagen.src = 'img/saturnoEdu.png';
};
bt2.onclick = function () {
    if (aux == 1) imagen.src = 'img/marteIti.png';
    if (aux == 2) imagen.src = 'img/jupiterIti.png';
    if (aux == 3) imagen.src = 'img/saturnoIti.png';
};
bt3.onclick = function () {
    if (aux == 1) imagen.src = 'img/marteEsp.png';
    if (aux == 2) imagen.src = 'img/jupiterEsp.png';
    if (aux == 3) imagen.src = 'img/saturnoEsp.png';
};




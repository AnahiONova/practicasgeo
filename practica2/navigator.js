var navegador = document.getElementById("navegador");
var datos = navegador.getElementsByTagName("li");

function obtieneDatos() {
  datos[0].innerHTML = "Nombre del Navegador es:" + navigator.appCodeName;
  datos[1].innerHTML = "Version del Navegador es:" + navigator.appVersion;
  datos[2].innerHTML = "Estatus de Internet es:" + navigator.onLine;
  datos[3].innerHTML = "Plataforma es:" + navigator.platform;
}
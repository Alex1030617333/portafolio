

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#Portafolio", {
    strings: [`! BIENVENIDOS  \n A   MI PORTAFOLIO `],
  }).go();
});

function leer() {
  let leermas = document.getElementById("leermas");
  let btnmas = document.getElementById("btnmas")

  if (leermas.style.display === "none") {
    leermas.style.display = "inline";
    btnmas.textContent="ocultar"

  } else {
    leermas.style.display = "none";
    btnmas.textContent="Leer mas..."
  }
}

/*
Manejo Boton Scroll Top
*/
const botonScroll = document.getElementById("scrollBtn");
window.onscroll = function () {
  mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonScroll.style.opacity = "1";
  } else {
    botonScroll.style.opacity = "0";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE y Opera
}

botonScroll.addEventListener("click", scrollToTop);

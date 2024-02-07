/*
Control de lightbox
*/

const imagen_requisitos = document.querySelectorAll(".imagen_requisitos");

for (let nodo of imagen_requisitos) {
  nodo.addEventListener("click", (evento) => {
    showImage(evento.target.src);
  });
}

function showImage(imageSrc) {
  // Muestra la imagen en el lightbox
  document.getElementById("lightbox-image").src = imageSrc;
  document.getElementById("lightbox").style.display = "flex";
}

// Cierra el lightbox al hacer clic fuera de la imagen
document.getElementById("lightbox").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
});

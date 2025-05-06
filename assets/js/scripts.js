$(document).ready(function() {
  $('#enviarButton').attr('title', '¡VIAJA CON NOSOTROS!');
});

$(document).ready(function() {
  // Añadir el tooltip con jQuery
  $('#enviarButton').attr('title', '¡VIAJA CON NOSOTROS!');
  
  // Mostrar la alerta al hacer clic en el botón
  $('#enviarButton').click(function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe si es un formulario
    alert('Nos comunicaremos pronto');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".card-img-top");

  images.forEach(image => {
    image.addEventListener("click", function () {
      const cardBody = this.parentElement.querySelector(".card-body");
      if (cardBody) {
        cardBody.classList.toggle("d-none");
      }
    });
  });
});
$(document).ready(function() {
  $('#enviarButton').attr('title', '¡VIAJA CON NOSOTROS!');
});

$(document).ready(function() {
 
  $('#enviarButton').attr('title', '¡VIAJA CON NOSOTROS!');
  
  $('#enviarButton').click(function(e) {
    e.preventDefault(); 
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
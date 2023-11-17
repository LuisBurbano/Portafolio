
//Menu movil
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
});


//Modal
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var modalContent = "Nombre: " + name + "<br>Correo: " + email + "<br>Asunto: " + subject + "<br>Mensaje: " + message;

  document.getElementById("modalContent").innerHTML = modalContent;

  // Inicializa el modal
  var modal = document.getElementById("modal2");
  var instance = M.Modal.init(modal);

  // Abre el modal
  instance.open();
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});
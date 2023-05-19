var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");

  if (nombre.value == "") {
    alert("Por favor ingrese su nombre");
    event.preventDefault();
    return false;
  }

  if (email.value == "") {
    alert("Por favor ingrese su correo electrónico");
    event.preventDefault();
    return false;
  }

  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email.value)) {
    alert("Por favor ingrese un correo electrónico válido");
    event.preventDefault();
    return false;
  }

  return true;
});

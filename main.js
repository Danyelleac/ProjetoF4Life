function validar() {
  var email = formulario.email;
  var mensagem = formulario.mensagem;
  var emailRegex = validarEmail(email.value);

  if (emailRegex) {
    alert("Erro no envio: Endereço de E-mail inválido");
    email.focus();
  } else if (mensagem.value === "") {
    alert("Erro no envio: Insira uma mensagem");
    mensagem.focus();
  } else {
    alert("Obrigada pelo contato " + email.value.substring(0, 32));
  }
}

function validarEmail(email) {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)) {
    return false;
  } else {
    return true;
  }
}

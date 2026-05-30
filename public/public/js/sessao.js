// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    //var b_cpf=document.getElementById('id_cpf');
    if (email == null && nome == null) {
      window.location = "../loginn.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../loginn.html";
}


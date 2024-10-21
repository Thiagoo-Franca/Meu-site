function comecar() {
    window.location.href = "/home/thiago/Programacao/html-css/meusite/login.html";
}

function entrar(){
    var senha_correta = "1234";
    var senha_usu = document.getElementById("senha_usuario").value;  
    var nome = document.getElementById("nome").value;

    if (senha_correta == senha_usu) {
        localStorage.setItem("nome", nome);

        window.location.href = "/home/thiago/Programacao/html-css/meusite/paginainical.html";
    }
    else {
        alert("Senha incorreta! Tente novamente")
    }
}

document.addEventListener('keydown', function(event) {
        if(event.key == "Enter") {
         entrar();
        }
    })
function comecar() {
    window.location.href = "scr/login.html";
}

function entrar(){
    var senha_correta = "1234";
    var senha_usu = document.getElementById("senha_usuario").value;  
    var nome = document.getElementById("nome").value;

    if (senha_correta == senha_usu) {
        localStorage.setItem("nome", nome);

        window.location.href = "paginainical.html";
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

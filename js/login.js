function validar(){
    let nome= formulario.name;
    let senha = formulario.senha
    

    if(nome.value==""){
        alert("informe o seu nome")
    }else if(senha.value==""){
        alert("informe sua senha")
    }else{
        location.assign("http://127.0.0.1:5500/Desafio_Meu_Site/Desafio.html")

    }
}
function validarformulario(){
    let nome=form.nome;
    let cep = form.endereco;
    let telefone = form.telefone;
    let cpf= form.cpf;
    let senha= form.senha;
    let confirsenha=form.confirsenha;

    if(nome.value==""){
        alert("nome obrigatorio!");
    }else if(telefone.value==0){
        alert("telefone obrigario!!");
     
     }else if(cep.value==""){
        alert("cep invalido");
     }else if(cpf.value==0){
         alert("cpf invalido");
     }else if(senha==value || confirsenha.value==""){
        alert("digiter sua senha");
     }else if(senha.value!=confirsenha.value){
        alert("senha precisa ser igual")
     }
      else{
         location.assign("http://127.0.0.1:5500/Desafio_Meu_Site/Desafio.html")
      }
}
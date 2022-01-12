setTimeout(() => {
    alert(`Bem vindo ao club ECOSAVIOR. Esse troféu é todo seu, PARABEÉNS!!!!!!!`)
    var retorno = prompt(`Digite OK pra jogar novamente`);

    if( retorno == "ok" || retorno == "OK"){
        window.location.href = "index.html";
    }else{
        alert(`resposta invalida meu amigo ECOSAVIORS`);
    }
    
}, 2000);
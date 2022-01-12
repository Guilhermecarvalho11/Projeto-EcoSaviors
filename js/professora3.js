function btn() {
    var opcoes = prompt(`
    1 - Depois de pagos, colocar fogo nos boletos.
    2 - Continuar recebendo normalmente os boletos por correios. 
    3 - Se cadastrar na plataforma das empresas e receber os boletos por e-mail ou aplicativos, diminuindo o número de papeis em sua casa.`);
    
    if( opcoes == "1"){
        location = "gameover.html";
    }else if( opcoes == "2"){
        location = "gameover.html";
    }else if ( opcoes == "3"){
        location = "gain.html";
        alert(`Hoje em dia, com tantos recursos digitais, podemos abandonar o uso do papel em diversas ocasiões, como: recebendo boletos online, usando apps para ingressos de eventos, etc`)
    }
    else{
        alert(`Clique em "OPÇÕES" para tentar de novo.`)
    }
}
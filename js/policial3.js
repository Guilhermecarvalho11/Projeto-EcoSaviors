function btn() {
    var opcoes = prompt(`
    1 - Construir uma casa nova com janelas maiores, para que ela fique mais iluminada durante o dia.
    2 - Instalar fitas que brilham no escuro para poder guiá-lo melhor durante a noite.
    3 - Instalar o sistema de energia solar em sua casa.`);
    
    if( opcoes == "1"){
        location = "gameover.html";
    }else if( opcoes == "2"){
        location = "gameover.html";
    }else if ( opcoes == "3"){
        alert(`Seu sistema capta a radiação solar e a converte em eletricidade sem agredir a natureza. Por isso quem investe em energia solar passa a ter um compromisso com o meio ambiente.`)
        location = "gain.html";
    }
    else{
        alert(`escolha um opção válida.`)
    }
}
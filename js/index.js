function btn() {
    var iniciar = prompt(`Escolha o seu personagem`);
    alert(`ATENÇÃO! Você só tem uma chance a cada pergunta. Caso falhe na missão retornará ao inicio do jogo`)
    alert(`MISSÃO DADA É MISSÃO CUMPRIDA`)
    
    if( iniciar == "Médico"){
        location = "medico.html";
    }else if( iniciar == "Professora"){
        location = "professora.html";
    }else if (iniciar == "Policial"){
        location = "Policial.html";
    }
    else{
        alert("Escolha uma opção valida")
    }
}
function btn() {
    var Opções = prompt(`
    1 - Sabendo que teria apenas 1/4 da maquina ocupada, colocaria água em quantidade mínima e lavaria, já que usaria menos produtos químicos.
    2 - Usaria apenas uma roupa por semana, já que não é necessário lavar roupas sujas.
    3 - Esperaria a máquina encher de roupa até o limite para usa-lá, ou lavaria as poucas peças manualmente.`);
    
    if( Opções == "1"){
        location = "gameover.html";
    }else if( Opções == "2"){
        location = "gameover.html";
    }else if ( Opções == "3"){
        alert("A máquina de lavar consome bastante energia elétrica e água, procure usá-la somente em sua capacidade máxima.")
        location = "professora3.html";
    }
    else{
        alert("Escolha uma opção valida")
    }
}
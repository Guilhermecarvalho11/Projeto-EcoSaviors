function btn() {
    var opcoes = prompt(`
    1 - Comprar a Ecobag, pois além de diminuir o número de sacolas de plástico jogadas no meio ambiente todo o fim de semana, é estilosa e confortável.
    2 - Continuar usando a sacola do supermercado, pois por não carregar muito peso, acredita não ter motivos para fazer a troca.
    3 - O preço investido em uma Ecobag é desnecessário, pois as pessoas sempre vão continuar usando sacolas.`);
    
    if( opcoes == "1"){
        alert(`MUDA QUE QUANDO A GENTE MUDA O MUNDO MUDA COM A GENTE.
        BELA ESCOLHA!!!`)
        location = "professora2.html";
    }else if( opcoes == "2"){
        alert(`já pensou em participar do GREENPEACE? falta só mais um pra ganha o celo ECOSAVIOR.`)
        location = "gameover.html";
    }else if ( opcoes == "3"){
        location = "gameover.html";
    }
    else{
        alert(`Opção não reconhecida. clique em "OPÇÕES" para tentar novamente.`)
    }
}
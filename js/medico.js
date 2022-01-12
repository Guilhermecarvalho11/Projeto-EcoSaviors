function btn() {
    var Opcoes = prompt(` 
    1 - Separar o lixo em diferentes sacolas e esperar o dia certo da coleta para ser descartado.
    2 - Embrulhar todos os itens em uma mesma sacola para diminuir o volume e agilizar o seu dia.
    3 - Separar o lixo para que um catador de materiais recicláveis recolha.`);
    
    if( Opcoes == "1"){
        alert(`Procure sempre locais apropriados para o descarte de resíduos nocivos ao meio ambiente, a fim de evitar efeitos negativos ao ecossistema, como contaminação da água e do solo, transmissão de doenças, etc…`)
        location = "medico2.html";
    }else if( Opcoes == "2"){
        location = "gameover.html";
    }else if ( Opcoes == "3"){
        location = "gameover.html";
    }
    else{
        alert(`Opção não reconhecida. clique em "OPÇÕES" para tentar novamente.`)
    }
}
function btn() {
    var Opções = prompt(`
    1 - Jogar na rua ou na calçada, já que um papel não faz tanta difereça assim.
    2 - Guardar o lixo no bolso de sua calça e esperar a próxima lixeira ou aguardar chegar em casa para descartar a embalagem.
    3 - Comer a embalagem junto com o lanche.`);
    
    if( Opções == "1"){
        location = "gameover.html";
    }else if( Opções == "2"){
        alert(`Dê preferência à produtos com embalagens recicláveis e lembre-se sempre de separá-las para a reciclagem..`)
        location = "medico3.html";
    }else if ( Opções == "3"){
        location = "gameover.html";
    }
    else{
        alert("Escolha uma opção valida")
    }
}
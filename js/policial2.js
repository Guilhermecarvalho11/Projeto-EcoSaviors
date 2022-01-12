function btn() {
    var Opcoes = prompt(`
    1 - Colocar um sensor para que a lâmpada acenda apenas onde algúem estiver passando e apague sozinha em poucos segundos.
    2 - Comprar lâmpadas florescentes e deixá-las acesas, já que gastam menos energia.
    3 - Tirar todas a lâmpadas da casa e usar a lanterna do celular.`);
    
    if( Opcoes == "1"){
        alert(`Tão importante quanto diminuir o desperdício de água é se atentar ao (des)aproveitamento de luz. Além de ter menos gastos financeiros com esse recurso, você ainda ajuda a cuidar do meio ambiente`)
        location = "policial3.html";
    }else if( Opcoes == "2"){
        location = "gameover.html";
    }else if ( Opcoes == "3"){
        location = "gameover.html";
      
    }
    else{
        alert(`Opção não reconhecida. clique em "OPÇÕES" para tentar novamente.`);
    }
}
function btn() {
    var Opcoes = prompt(`
    1 - Evitar beber água no batalhão.
    2 - Substituir os copos de plástico por copos de vidro, rotulando com o nome de cada funcionário para uso pessoal.
    3 - Começar a beber água com a mão.`);
    
    if( Opcoes == "1"){
        location = "gameover.html";
    }else if( Opcoes == "2"){
        alert(`O Brasil é o quarto país do mundo que mais gera lixo plástico, e o que menos recicla`);
        location = "policial2.html";
    }else if ( Opcoes == "3"){
        location = "gameover.html";
      
    }
    else{
        alert(`Opção não reconhecida. clique em "OPÇÕES" para tentar novamente.`);
    }
}
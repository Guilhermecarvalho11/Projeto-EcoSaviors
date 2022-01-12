function btn() {
    var Opções = prompt(`
    1 - Continuar indo ao serviço em seu próprio automóvel, pois a emissão de CO² do seu carro é pouco notável para prejudicar o meio ambiente.
    2 - Chamar um aplicativo móvel.
    3 - Pegar o transporte público ao menos 5 dias na semana, para ajudar a diminuição do trâsito e na emissão de CO².`);
    
    if( Opções == "1"){
        location = "gameover.html";
    }else if( Opções == "2"){
        location = "gameover.html";
    }else if ( Opções == "3"){
        location = "gain.html";
        alert(`Existem inúmeras opções de transportes sustentáveis (como andar a pé ou de bicicleta, por exemplo), e mais tantas outras opções de transporte coletivo como ônibus, metrô e trem.`)
    }
    else{
        alert(`escolha um opção válida.`)
    }
}
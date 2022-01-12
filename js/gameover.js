setTimeout(() => {
      var novaTentativa = prompt(`Digite OK para tentar novamente`)
      if(novaTentativa == "ok" || novaTentativa == "OK"){
        location = "index.html";
        }else{
        prompt(`Digite OK para tentar novamente`)
       }
   }, 2000);
   


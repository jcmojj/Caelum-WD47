// *******************************************************************************************
// IIFE - Immediately Invoked Function Expressions - não deixar o usuario exposto pelo console
// *******************************************************************************************
// ========================================mudaLayout=========================================
// *******************************************************************************************

// *****************************************************
// implementando o botao que muda de linha x coluna - javascript puto
// *****************************************************

(function(){
  "use strict"; // limita o uso de - variavel = 10; a - var variavel = 10;, dando erro no 1o caso
  var botao = document.querySelector("#mudaLayout");
  var mural = document.querySelector(".mural");
  botao.addEventListener("click", funcao);
  var counter = 0;

  function funcao(){
    mural.classList.toggle("mural--linhas");
    if(mural.classList.contains("mural--linhas")){
      this.textContent = "Blocos";   // console.log("bloco" + counter++);
    }else{
      this.textContent = "Linhas";   // console.log("linha" + counter++);
    }

  }
})()

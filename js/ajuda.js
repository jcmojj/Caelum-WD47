// *******************************************************************************************
// IIFE - Immediately Invoked Function Expressions - não deixar o usuario exposto pelo console
// *******************************************************************************************
// ===========================================AJUDA===========================================
// *******************************************************************************************


// *****************************************************
// implementando cartoes de ajuda - jQuery + AJAX + JSON
// *****************************************************
(function(card){
  "use strict"; // limita o uso de - variavel = 10; a - var variavel = 10;, dando erro no 1o caso
  $("#ajuda").click(function(){
    $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",function(res){ // RES = é o objeto de retorno JSON
      console.log(res);
      res.instrucoes.forEach(function(instrucao){
        card.adicionaCartao(instrucao.conteudo, instrucao.cor);
      });
    });
  });
})(controladorDeCartoes)

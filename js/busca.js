// *******************************************************************************************
// IIFE - Immediately Invoked Function Expressions - não deixar o usuario exposto pelo console
// *******************************************************************************************
// ==========================================busca============================================
// *******************************************************************************************

// *****************************************************
// implementando a busca - jQuery
// *****************************************************
(function(){
  "use strict"; // limita o uso de - variavel = 10; a - var variavel = 10;, dando erro no 1o caso
  $("#busca").on("input",function(){
    var busca = $(this).val().trim(); // pega conteudo digitado sem espaços em excesso
    if(busca.length){
      $(".cartao").hide().filter(function(){
        return $(this).find(".cartao-conteudo")
        .text()
        .match(new RegExp(busca,"i"));
      }).show();
    }else{$(".cartao").show();
  }
});
})()

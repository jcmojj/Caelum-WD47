// *******************************************************************************************
// IIFE - Immediately Invoked Function Expressions - não deixar o usuario exposto pelo console
// *******************************************************************************************
// =====================================adicionaCartao========================================
// *******************************************************************************************
// var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
// for (var i = 0; i< botoes.length; i++){
//   botoes[i].addEventListener("click",removeCartao);
// }

var controladorDeCartoes = (function(){
  "use strict"; // limita o uso de - variavel = 10; a - var variavel = 10;, dando erro no 1o caso
  //var contador = $(".cartao").length; // verifica a quantidade de cartoes



  function decideTipoCartao(){
    //pulamos
  }
  var contador = 0;
  function adicionaCartao(conteudo, cor){
  //return function (conteudo, cor) {
    contador++;

    var opcoes = criaOpcoesDoCartao(contador);

    var conteudoTag = $("<p>").addClass("cartao-conteudo") //cria o <p> e adiciona a classe
                              .append(conteudo); //adiciona o conteudo dentro do <p>
    $("<div>").attr("id","cartao_" + contador)
              .attr("tabindex",0)
              .addClass("cartao") //adiciona a classe cartao a essa div
              .append(opcoes)
              .append(conteudoTag) //dentro dessa  <div> criada adicionar o conteudoTag
              .css("background-color", cor)
              .prependTo(".mural"); //dentro da section que possui classe mural, adicionar a div criada
  //};
  }
  return {
    adicionaCartao: adicionaCartao,
    idUltimoCartao: function(){ //getter
      return contador;
    }
  }
})();

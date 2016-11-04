var criaOpcoesDoCartao = (function(){
"use strict";

  function removeCartao(){
      var cartao = document.querySelector("#cartao_"+ this.dataset.ref); //identifica o cartao
      cartao.classList.add("cartao--some"); //adiciona a classe cartao--some
       setTimeout(function(){
           cartao.addEventListener("transitionend",cartao.remove) //aguarda fim da transicao para remover cartao
           $(document).trigger("precisaSincronizar");
      },400)
      cartao.addEventListener("transitionend",cartao.remove) //aguarda fim da transicao para remover cartao
      $(document).trigger("precisaSincronizar");
  }

  var ehPraEditar = false;
  function toggleEdicao(){
    var cartao = $("#cartao_" + this.dataset.ref);
    var conteudo = cartao.find(".cartao-conteudo");
    if(ehPraEditar){
      ehPraEditar = false;
      conteudo.attr("contenteditable",false);
      conteudo.blur();
    }else{
      ehPraEditar = true;
      conteudo.attr("contenteditable", true);
      conteudo.focus(0);
    }
  }

  return function(idNovoCartao){
  //Adicionando o botao
  var botaoRemove = $("<button>").addClass("opcoesDoCartao-opcao")
                                 .addClass("opcoesDoCartao-remove")
                                 .attr("data-ref",idNovoCartao) //deu problema pq esqueci ai ele procura esse valor
                                 //para saber na hora de apagar, qual cartao temos que apagar antes era contador
                                 .text("Remover")
                                 .click(removeCartao);

  var botaoEdita = $("<button>").addClass("opcoesDoCartao-edita")
                                .addClass("opcoesDoCartao-opcao")
                                .attr("data-ref",idNovoCartao)
                                .text("Editar")
                                .click(toggleEdicao);

  //cria a div de opcoes
  var opcoes = $("<div>").addClass("opcoesDoCartao")
                         .append(botaoRemove)
                         .append(botaoEdita);

  return opcoes;
  }



})();

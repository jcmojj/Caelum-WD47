var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
for (var i = 0; i< botoes.length; i++){
  botoes[i].addEventListener("click",removeCartao);
}

function removeCartao(){
  var cartao = document.querySelector("#cartao_"+ this.dataset.ref); //identifica o cartao
  cartao.classList.add("cartao--some"); //adiciona a classe cartao--some
  cartao.addEventListener("transitionend",cartao.remove) //aguarda fim da transicao para remover cartao
}

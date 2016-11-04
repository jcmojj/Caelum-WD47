// *******************************************************************************************
// IIFE - Immediately Invoked Function Expressions - não deixar o usuario exposto pelo console
// *******************************************************************************************
// =======================================SINCRONIZACAO=======================================
// *******************************************************************************************
(function(card){ //card internamente = controladorDeCartoes externamente -- indica dependencias
  "use strict"; // limita o uso de - variavel = 10; a - var variavel = 10;, dando erro no 1o caso
  //escolha seu nome de usuario aqui
  var usuario = "jcmojj@gmail.com";
  // *****************************************************
  // carregando dados diretamente do servidor via AJAX
  // *****************************************************
  // somente carrega tudo do servidor da primeira vez,
  // depois so atualiza o servidor a cada iteracao do usuario
  // *****************************************************
  $.getJSON("http://ceep.herokuapp.com/cartoes/carregar?callback=?",
  {usuario:usuario},
  function(res){
    var cartoes = res.cartoes;
    console.log(cartoes.length + "carregados em " + res.usuario);
    cartoes.forEach(function(cartao){
      card.adicionaCartao(cartao.conteudo);
    })
  }
)

$("#sync").click(function(){ // tem que deixar dentro de function para não executar quando ler o codigo
  $(document).trigger("precisaSincronizar"); // isso porque o trigger obrigatoriamente abre e fecha parentesis
})

// setInterval(function(){
//   $(document).trigger("precisaSincronizar");
//   console.log("set interval");
// },10000);

// mais avancado

  //  window.requestAnimationFrame(function(timeStemp){
  //    if((timeStemp-ultimo)>500){
   //
  //    }
  //  })

// *****************************************************
// enviando dados por AJAX
// *****************************************************

$(document).on("precisaSincronizar", function(){
//$("#sync").click(function(){
  var cartoes = [];
  $(".cartao").each(function(){
    var cartao = {}; // cartao igual a JSON
    cartao.cor = $(this).css("background-color");
    cartao.conteudo = $(this).find(".cartao-conteudo").html(); //na aula usou .text()
    cartoes.push(cartao);//coloca o objeto cartao dentro do array cartoes
  });

  var mural = { //JSON
    usuario: usuario, // indicado acima
    cartoes: cartoes // criado acima - array
  };

  $.ajax({ // sobe para o servidor o mural
    url: "https://ceep.herokuapp.com/cartoes/salvar",
    method: "POST",
    data: mural,
    success: function(res){
      console.log(res.quantidade + "cartoes salvos em" + res.usuario);
      $("#sync").addClass("botaoSync--sincronizado");
      var quantidadeRemovidos = controladorDeCartoes.idUltimoCartao()-res.quantidade;
      console.log(quantidadeRemovidos + "cartoes removidos");
    },
    error: function () {
      console.log("Nao foi possivel salvar no mural");
      $("#sync").addClass("botaoSync--deuRuim")
    },
    complete: function(){
      $("#sync").removeClass("botaoSync--esperando")
    }
  });
})

// *****************************************************
// mensagens intermediarias de sucesso na sincronizacao AJAX
// *****************************************************

//$("#sync").on("click", function(){
$(document).on("precisaSincronizar", function(){
  $("#sync").removeClass("botaoSync--sincronizado");
  $("#sync").addClass("botaoSync--esperando");
})

})(controladorDeCartoes)//()- para executar quando ler

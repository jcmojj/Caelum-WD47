// *******************************************************************************************
// IIFE - Immediately Invoked Function Expressions - não deixar o usuario exposto pelo console
// *******************************************************************************************
// ========================================novoCartao=========================================
// *******************************************************************************************
(function(controlador){
  "use strict"; // limita o uso de - variavel = 10; a - var variavel = 10;, dando erro no 1o caso
  var novoCartao = document.querySelector(".novoCartao");
  novoCartao.addEventListener("submit",function (event){
    event.preventDefault();
    var novoCartaoTexto = document.querySelector(".novoCartao-conteudo");
    var elementError = document.querySelector(".error"); console.log(elementError);
    if(novoCartaoTexto.value==""){
      console.log("a");
      var msgErro = document.createElement("p");
      msgErro.textContent = "Preencha o campo acima";
      msgErro.classList.add("error");
      if(document.querySelector(".error")==null){
        novoCartao.insertBefore(msgErro,document.querySelector(".novoCartao-salvar"));
      }
    }
  })

  $(".novoCartao").submit(function(event){
    var campoConteudo = $(".novoCartao-conteudo"); // procura esse campo discriminado pela classe
    var conteudo = campoConteudo.val().trim() // pega o valor do campo e tira os espaços das estremidades
    .replace(/\n/g,"<br>")

    //  if(conteudo.match(/\*\*/)){
    //    conteudo = $("<b>").append(conteudo.replace(/\*\*/, ''));
    //  };
    //console.log(conteudo.startsWith("** type="text/javascript""));
    //console.log(conteudo.search(/\*\*/)==1);
    // procura como MDT pg72 -
    // cria uma tag <b> e adiciona o conteudo

    // if(conteudo.startsWith("**")&&conteudo.search(/\*\*/)==0){
    //   conteudo = $("<b>").append(conteudo.replace(/\*\*/, ''));
    // };

     var arrayName = [];
     var conteudoFinal = "";

       conteudo.split(" ")
               .forEach(function(palavra){
                 var novaPalavra = palavra.replace(/^\*\*/, "<strong>")
                                          .replace(/\*\*$/, "</strong>")
                 arrayName.push(novaPalavra);
               })

        arrayName.forEach(function (palavra) {
          conteudoFinal += palavra + " "
        })
        conteudo = conteudoFinal;

        var arrayName = [];
        var conteudoFinal = "";

          conteudo.split(" ")
                  .forEach(function(palavra){
                    var novaPalavra = palavra.replace(/^\*/, "<em>")
                                             .replace(/\*$/, "</em>")
                    arrayName.push(novaPalavra);
                  })

           arrayName.forEach(function (palavra) {
             conteudoFinal += palavra + " "
           })
           conteudo = conteudoFinal;

    //if(conteudo.match)

    //    conteudo.replace("**",)

    if(conteudo){ //se o conteudo for nulo não faz nada
      controlador.adicionaCartao(conteudo,"#EBEF40");
      $(document).trigger("precisaSincronizar");
    }
    campoConteudo.val(""); //zera o valor do campoConteudo
    event.preventDefault();
  });}
)(controladorDeCartoes)

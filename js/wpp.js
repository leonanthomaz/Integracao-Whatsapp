//Botão de enviar as informações no WhatsApp

$(document).ready(function(){
    
    $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       var observacao = $("textarea").val()
       var troco = $("#troco").val()
       
       // FORMA de pagamento selecionada
       const formasDePagamento= document.querySelectorAll("form input[type=radio]")
       var formaSelecionada = ""
       if(formasDePagamento[0].checked){
           formaSelecionada = "Cartão"
        } else {
            formaSelecionada = "Dinheiro"
            
        }

      
        // Hamburguer
   

          var valor = 7;
          var pedido = ""
          const pedidoDisponivel = document.querySelectorAll(".pedido1 input[type=number]")
          var pedidoSelecionada = ""
          var qtd1 = 0; 
          var soma = 0;
          
  
          for ( pedido of pedidoDisponivel) {
  
              if(pedido.value){
                pedidoSelecionada +=` ${pedido.alt} -> ${valor},00 Reais -> Qtd: ${pedido.value} / `
                  var pedidoValor = parseInt(pedido.value)
                  qtd1 = pedidoValor  * valor
                  soma += qtd1
  
                  
              }
  
          }
  
        
        //Taxa de entrega
        var TaxaDeEntrega = 0;
        var bairro = ""
        const Bairros = document.querySelectorAll("option")
        if(Bairros[1].selected==true){
            bairro = 'Copacabana'
            TaxaDeEntrega += parseInt(Bairros[1].value)
            
        } else if(Bairros[2].selected==true){
            TaxaDeEntrega += parseInt(Bairros[2].value)
            bairro = 'Leblon'
        } else if(Bairros[3].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[3].value)
            bairro = 'Laranjeiras'
            
        } else if(Bairros[4].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[4].value)
            bairro = 'Botafogo'
            
        } else if (Bairros[5].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[5].value)
            bairro = 'Flamengo'

        } else if (Bairros[6].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[5].value)
            bairro = 'Catete'
            
        } else {
            TaxaDeEntrega += parseInt(Bairros[7].value)
            bairro = 'Outros'
        }

        var cupom = $("#cupom").val()
           if( cupom == 'falcon10' ) {
           var desconto = 10
        }else{ 
        if( cupom == '' ) {
        var desconto = 0
     } 
           
    }

    
    var texto=`🍔 *Obrigado por escolher a Lanchonete X!* 🍔 --- Em instantes você será atendido! --- *A Descrição do seu pedido é:*  *Nome:* ${nome}; 🏠 *Endereço:* ${endereco}; *N°:* ${numero}; *Região:* ${bairro};  *Obs:* ${observacao};
    💳 *Forma de Pagamento:* ${formaSelecionada}, 🛒 *Pedido:* ${pedidoSelecionada},
    💰 *Valor do Pedido =* ${soma},00 
    ;🛵 *Taxa de entrega =* ${TaxaDeEntrega},00 
    ;🪙 *Troco para =* ${troco},00 Reais 
    ;💲 *Desconto =* ${desconto},00  
    ;💵 *Valor Total:* ${(soma+TaxaDeEntrega)- desconto},00`
    var site="https://api.whatsapp.com/send?phone=552198090928&text="+texto.replace(" ","%20","%0a")
    
    
   
    if(confirm("Confirma seu pedido?")){ 
        alert("Perfeito!😃 Seu pedido já foi formulado. Agora basta nos enviar a descrição do seu pedido e pronto!😄")  
        window.location.href=site;
        
    } else {
        document.location.reload(true);

    }
})
})


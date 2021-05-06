var bot = document.querySelector('#bot');
var nome = document.querySelector('#nome');
var prod = document.querySelector('#prod');
var valor = document.querySelector('#valor');
var qnt = document.querySelector('#qnt');
var parc = document.querySelector('#parc');
var info = document.querySelector('#info');

bot.addEventListener('click', () => {
  if(nome.value != "" && prod.value != "" && valor.value !="" && qnt.value != "" && parc.value != "Parcelas"){

  let valort = parseFloat(valor.value) * parseFloat(qnt.value);
  let juros = String;

      if(parc.value == "3"  ){
        juros = "5%";
        valort = valort + (valort * 0.05);
      }else if (parc.value == "6"){
        juros = "12%";
        valort = valort +  (valort * 0.12);
      }else{
        juros = "Sem juros";
      }
    
    
  for (var cont = 1; cont <= parc.value; cont++) {
    info.innerHTML = info.innerHTML + "<hr><br><b>Cliente: </b>" + nome.value + "<br>" +
                                      "<b><div aling=left>Produto: </b>" + prod.value + "<br>"+
                                      "<b>Valor: </b>" + parseFloat(valor.value) .toFixed(2)   + "<br>" + 
                                      "<b> Quantidade: </b>" + qnt.value + "<br>" +
                                      "<b>Valor Total: </b>" + valort .toFixed(2) + "<br><br>" +
                                      "<b>Valor da Parcela: </b>" +( valort / parseFloat(parc.value)) .toFixed(2) + 
                                      "<br><b> Juros: </b>" + juros + "</br>"+
                                      "<div align=right> <b>Parcela: </b>" + cont + "/" +parc.value+ "</div><br><hr><br><br>";
  }


}else{
  alert("Preencha todos os campos.");
}


})
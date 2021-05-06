var bot = document.querySelector('#bot');
var nome = document.querySelector('#nome');
var disciplina = document.querySelector('#disciplina');
var nota1 = document.querySelector('#nota1');
var nota2 = document.querySelector('#nota2');
var info = document.querySelector('#info');


bot.addEventListener('click', () => {
    if (nome.value != "" && disciplina.value != "Disciplinas..." && nota1.value != "" && nota2.value != ""){ 
                    
    let media = (parseFloat(nota1.value) + parseFloat(nota2.value)) / 2;

    if (media <= 3){
        var status = "ficou Reprovado";
    } else if (media < 7){
        var status = "ficou de Recuperação";
    } else {
        var status = "foi Aprovado";
    }
        info.innerHTML ="<div aling=left> Nome: " + nome.value + "<br>" +
                        "Disciplina: " + disciplina.value + "<br>" +
                        "Nota 1: " + nota1.value + "<br>" +
                        "Nota 2: " + nota2.value + "</div> <br> <hr> <br>" +        
        
        "<center>" + nome.value + ", Você <b>" + status + "</b> na disciplina de " + disciplina.value +
         " com<b> Media: " + media .toFixed(2) + "</b></center>" ;
}else {
    alert("Preencha todos os campos.");
}
    
});
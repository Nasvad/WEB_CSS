var bot = document.querySelector('#bot');
var nome = document.querySelector('#nome');
var peso = document.querySelector('#peso');
var altura = document.querySelector('#altura');
var info = document.querySelector('#info');
var element = document.querySelector('.info');

bot.addEventListener('click', () => {
    if(nome.value != "" && peso.value != "" && altura.value != ""){
    
    let imc =  parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))
    let result = String;
    

    if(imc < 18.5){
        result = "Olá " + nome.value + `, você está no nível de obesidade: <b>Baixo peso.</b>
         Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: 
         <b>Peso baixo para a altura. Maior probabilidade de anorexia.</b>`;
         element.style.background = 'white';
    }else if(imc > 18.5 && imc <= 24.9){
        result = "Olá " + nome.value + `, você está no nível de obesidade: <b>Peso Normal.</b>
        Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: 
        <b>Maior probabilidade de ser um indivíduo saudável.</b>`
        element.style.background = 'rgb(18, 216, 18)';
    }else if(imc > 24.9 && imc <= 29.9){
        result = "Olá " + nome.value + `, você está no nível de obesidade: <b>Pré-obesidade.</b>
        Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: 
        <b>Alguma probabilidade de problemas de saúde. Predisposição a torna-se obeso.</b>`
        element.style.background = 'yellow';
    }else if(imc > 29.9 && imc <= 34.9){
        result = "Olá " + nome.value + `, você está no nível de obesidade: <b>Obesidade Grau I.</b>
        Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: 
        <b>Risco moderado de diabetes tipo II, hipertensão, colestorol, cardiopatia.</b>`;
        element.style.background = 'rgb(255, 182, 47)';
    }else if (imc > 34.9 && imc <= 39.9){
        result = "Olá " + nome.value + `, você está no nível de obesidade: <b>Obesidade Grau II.</b>
        Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: 
        <b>Risco grave. Aumenta o risco das doenças associadas. O risco de mortalidade aumenta 50%.</b>`
        element.style.background = 'rgb(250, 162, 0)';
    }else if(imc > 39.9){
        result = "Olá " + nome.value + `, você está no nível de obesidade: <b>Obesidade Grau III ou obesidade mórbita.</b>
        Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: 
        <b>Risco muito grave. O risco de doenças associadas assim como a mortalidade aumenta 90%.</b>`
        element.style.background = 'red';
    }
    
    info.innerHTML = "<b><center>Resultado - IMC</center></b><br><br> "+

                       "<b>Paciente: </b>" + nome.value + "<br>" +
                       "<b><div aling=left>Peso: </b>" + peso.value + " Kg<br>"+
                       "<b>Altura: </b>" + altura.value + " M<br>" + 
                       "<b>IMC: </b>" + imc .toFixed(1) + "<br><br><hr><br>" +
                       "<b>OBS: </b>" + result;

    }else{
        alert("Preencha todos os campos.");
    }                  

})

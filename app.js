alert('boas vindas ao jogo do número secreto'); //aparece alerta em cima da tela 
numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //cria variável
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt('escolha um número entre 1 e ' + numeroMaximo); //cria local de input
    if (chute == numeroSecreto) { //comparação entre duas variáveis
        break;
      // alert('você acertou! o número secreto era '+ numeroSecreto) jeito#1
      
      // console.log('você acertou!') ferramenta pro desenvolvedor, não pro usuário
    }
    else {
      if (chute > numeroSecreto) {
          alert ('o número secreto é menor que o ' + chute);
      } else {
          alert('o número secreto é maior que o ' + chute);
      }
      tentativas++; // = tentativas - tentativas + 1
    }
  
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' // se a tentativa for maior que um, é "tentativas". se não (:), é "tentativa" OPERADOR TERNÁRIO
alert(`o número secreto era ${numeroSecreto}! você acertou com ${tentativas} ${palavraTentativa}`); 
// if (tentativas > 1) {
//   alert(`o número secreto era ${numeroSecreto}! você acertou com ${tentativas} tentativas`); 
// } else{
//   alert(`o número secreto era ${numeroSecreto}! você acertou com ${tentativas} tentativa`); 
// } ctrl + ; comenta tudo

// Exemplo de código sicrono
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");

console.log("------------sep");

// Exemplo de código assincrono
// Conhecendo a sintaxe do setTimeout
// setTimeout = executa o código depois de um determinado intevalo de tempo
// Funcao = geralmente anonima
// Tempo = geralmente usamos em milissegundos
// setTimeout(funcao, tempo)
console.log("7");

// Nesse caso, depois de 3 segundos, o código será exibido no console
setTimeout(function () {
  console.log("Teste");
}, 3000);

console.log("9");

// Conhecendo a sintaxe do setInterval
// Dessa forma, ele vai escrever infinitamente no console
// Isso acontece, porque o setInterval executa uma função repetidamente em intervalos de tempo fixos

// setInterval(function () {
//   console.log("Boa noite!");
// }, 1000);

// Criando uma aplicação simples com parada de intervalo
let contador = 0;

const intervalo = setInterval(() => {
  contador++;
  document.body.innerHTML = `contando: ${contador}`;

  if (contador >= 10) {
    clearInterval(intervalo);
    console.log("parou");
  }
}, 1000);

console.log(intervalo);
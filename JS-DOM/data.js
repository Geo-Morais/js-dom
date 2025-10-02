// Criando nova instancia de data
// O Date() é uma função construtora
// Essa função, cria uma forma de lidar com datas
const data = new Date();
console.log(data);

// Acesando partes especificas da data
// Ano
const ano = data.getFullYear();
console.log(ano);

// Mês - Ele devolve a posição do mês que está no array
const mes = data.getMonth();
console.log(mes);

// Dia da semana - Ele devolve a posição do dia da semana que está no array
const dia = data.getDay();
console.log(dia);

// Dia completo
const diaCompleto = data.getDate();
console.log(diaCompleto);

// Horas
const hora = data.getHours();
console.log(hora);

// Minutos
const minutos = data.getMinutes();
console.log(minutos);

// Segundos
const segundos = data.getSeconds();
console.log(segundos);

document.body.innerHTML = `${diaCompleto}/${mes + 1
  }/${ano} | ${hora}:${minutos}:${segundos}`;

// Criando datas especificas
const dataEspecifica = new Date(2024, 9, 25, 22, 50, 0);
// Ano, mês, dia, hora, minuto, segundo

console.log(dataEspecifica);

// PADRÃO ISO 8601 - IDEAL PARA LIDAR COM FUSO HORÁRIO
// const dataEspecifica = new Date("2024-9-25T22:50:0");

// Definindo valores
console.log(data.setHours(20));
console.log(data.setMinutes(45));

// Formatando datas
// Lembre-se que o fuso horário pode apresentar dados diferentes
// const novaData = new Date("2025-09");
const novaData = new Date("2025-09-19");
console.log(novaData.toLocaleDateString("pt-br"));
// console.log(novaData.toLocaleDateString("en-US"));
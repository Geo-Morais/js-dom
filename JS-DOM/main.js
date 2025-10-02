// O document representa o documento html
// querySelector = seletor de consulta
// Captura o primeiro elemento que aparecer
const titulo = document.querySelector("h1");
console.log(titulo);

// Captura todos os elementos
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

// Alterando o conteudo textual de uma tag
titulo.innerText = "Exemplos";
titulo.textContent = "Outro exemplo";

// Aplicando estilos
titulo.style.backgroundColor = "#1acc6f";
titulo.style.padding = ".5rem";
titulo.style.borderRadius = ".5rem";

// Conhecendo os eventos
// Os eventos são ações do usuário, ou seja, as interações dele com certos elementos
titulo.addEventListener("click", () => {
  titulo.innerText = "Outro texto";
  titulo.style.backgroundColor = "#1a58ccff";

  console.log("clicou");
});

titulo.addEventListener("mouseleave", function () {
  titulo.style.backgroundColor = "#cc1a32ff";
});

paragrafos.forEach((paragrafo) => {
  paragrafo.addEventListener("mouseenter", () => {
    paragrafo.style.backgroundColor = "#a21accff";
    paragrafo.style.borderRadius = ".25rem";
    paragrafo.style.padding = ".25rem";
  });
});
const btnMenu = document.querySelector("#btnMenu");

// captura o elemento do html
const linksMenu = document.querySelector(".links-menu");

// btnMenu.addEventListener("click", function () {
//   linksMenu.classList.toggle("ativo");
// });

// verificando as classes que existem na lista de classes do elemento
// console.log(linksMenu.classList);

btnMenu.addEventListener("click", () => {
  linksMenu.classList.toggle("ativo");

  // usamos o contains para verificar se o elemento contém a classe que queremos analisar
  if (linksMenu.classList.contains("ativo")) {
    btnMenu.setAttribute("aria-label", "Fechar menu da navegação");
    btnMenu.setAttribute("aria-expanded", "true");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir menu da navegação");
    btnMenu.setAttribute("aria-expanded", "false");
  }
});

// o elemento window representa a janela de visualização
window.addEventListener("resize", function () {
  // capturando a largura interna da janela de visualização
  if (window.innerWidth >= 800) {
    linksMenu.classList.remove("ativo");
    btnMenu.setAttribute("aria-label", "Abrir menu da navegação");
    btnMenu.setAttribute("aria-expanded", "false");
  }
});

const paginaAtual = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".links-menu a");
console.log(links);

links.forEach(function (link) {
  const href = link.getAttribute("href");

  if (href === paginaAtual) {
    console.log("Página certa");
    link.classList.add("linkAtivo");
  }
});
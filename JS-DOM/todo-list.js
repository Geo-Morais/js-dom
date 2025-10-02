const input = document.querySelector("#tarefaInput");
const listaTarefas = document.getElementById("tarefas");
const btnAddTarefa = document.getElementById("addTarefa");

btnAddTarefa.addEventListener("click", function () {
  const inputText = input.value.trim();

  // Validando as informações
  // Estamos verificando se o campo está vazio
  // Caso esteja vazio, disparamos um alerta para o usuário
  if (inputText === "") {
    alert("Por favor, digite uma tarefa!");
    return; // Usamos para evitar que o resto do código seja executado
  }

  // createElement - criar elementos html
  const li = document.createElement("li"); // Criando item da lista
  const btnRemover = document.createElement("button");

  li.textContent = inputText; // Definindo o conteúdo do item da lista
  btnRemover.textContent = "x"; // Definindo o conteúdo do button

  li.appendChild(btnRemover);
  listaTarefas.appendChild(li); // Inserindo um elemento na lista(ul)

  input.value = ""; // Limpando o campo do input

  btnRemover.addEventListener("click", function () {
    listaTarefas.removeChild(li);
  });
});
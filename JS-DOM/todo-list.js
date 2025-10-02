const input = document.querySelector("#tarefaInput");
const listaTarefas = document.getElementById("tarefas");
const btnAddTarefa = document.getElementById("addTarefa");

btnAddTarefa.addEventListener("click", function () {
  const inputText = input.value.trim();

  // validando as informações
  // estamos verificando se o campo está vazio
  // caso esteja vazio, disparamos um alerta para o usuário
  if (inputText === "") {
    alert("Por favor, digite uma tarefa!");
    return; //usamos para evitar que o resto do código seja executado
  }

  // createElement - criar elementos html
  const li = document.createElement("li"); //criando item da lista
  const btnRemover = document.createElement("button");

  li.textContent = inputText; //definindo o conteúdo do item da lista
  btnRemover.textContent = "x"; //definindo o conteúdo do button

  li.appendChild(btnRemover);
  listaTarefas.appendChild(li); //inserindo um elemento na lista(ul)

  input.value = ""; // limpando o campo do input

  btnRemover.addEventListener("click", function () {
    listaTarefas.removeChild(li);
  });
});
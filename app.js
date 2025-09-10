//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  const input = document.querySelector('#amigo');
  const nome = input.value.trim();

  
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

 
  amigos.push(nome);


  input.value = "";

  // Atualiza a lista na tela
  atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const lista = document.querySelector('#listaAmigos');
  lista.innerHTML = ""; // Limpa para não duplicar

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há amigos para sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}
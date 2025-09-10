//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  const input = document.querySelector('#amigo');
  const nome = input.value.trim();

  
  if (nome === "") {
    alert("Digite um nome válido");
    return;
  }



  const nomeJaExiste = amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase());
if (nomeJaExiste) {
  alert("Não digite o mesmo nome, caso os nomes sejam iguais, adicione o sobrenome ou um apelido.");
  return;
}

 
  amigos.push(nome);


  input.value = "";

  
  atualizarLista();
}


function atualizarLista() {
  const lista = document.querySelector('#listaAmigos');
  lista.innerHTML = ""; 

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Sem amigos para sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = `<li>O sortudo de hoje foi : <strong>${amigoSorteado}</strong></li>`;
}
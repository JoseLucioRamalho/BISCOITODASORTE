// Função para abrir o biscoito e mostrar a mensagem de sorte
function abrirBiscoito() {
  document.getElementById('cookie').classList.add('hide');
  document.getElementById('luck').classList.remove('hide');
  mostrarMensagemSorte();
}

// Função para mostrar a mensagem de sorte (você pode personalizar as mensagens)
function mostrarMensagemSorte() {
  const mensagensSorte = [
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "O riso é a menor distância entre duas pessoas.",
    "A paciência na adversidade é sinal de um coração sensível",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Espere pelo mais sábio dos conselhos: o tempo.",
    "Você é do tamanho do seu sonho.",
    // Adicione mais mensagens aqui
  ];

  const mensagemSorte = document.getElementById('mensagemSorte');
  const mensagemAleatoria = mensagensSorte[Math.floor(Math.random() * mensagensSorte.length)];
  mensagemSorte.textContent = mensagemAleatoria;
}

// Função para mostrar a primeira tela novamente
function mostrarOutroBiscoito() {
  document.getElementById('luck').classList.add('hide');
  document.getElementById('cookie').classList.remove('hide');
}
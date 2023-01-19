'use strict';

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let pontos = 20;
let record = 0;
const denovo = document.querySelector('.denovo');

const mostrarMensagem = (msg) => {
  document.querySelector('.mensagem').textContent = msg;
};

document.querySelector('.checar').addEventListener('click', function () {
  const palpite = Number(document.querySelector('.palpite').value);
  /* fazer isso qnd n tiver input */
  if (!palpite) {
    mostrarMensagem('Sem número! ⛔️');
    /* quando o player acertar */
  } else if (palpite === numeroSecreto) {
    mostrarMensagem('Número correto! 🎉');
    document.querySelector('.numero').textContent = numeroSecreto;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.numero').style.width = '30rem';
    if (pontos > record) {
      record = pontos;
      document.querySelector('.record').textContent = `${record}pts`;
    }
    /* quando o palpite for incorreto */
  } else if (palpite !== numeroSecreto) {
    if (pontos > 1) {
      mostrarMensagem(
        palpite > numeroSecreto ? '📈 Muito alto... ' : '📉 Muito baixo...'
      );
      pontos--;
      document.querySelector('.pontos').textContent = pontos;
    } else {
      mostrarMensagem('Você perdeu. 😢');
      document.querySelector('.pontos').textContent = 0;
    }
  }
});

/* elementos q resetam quando o botão DNV é clicado */
denovo.addEventListener('click', function () {
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.pontos').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.numero').style.width = '15rem';
  mostrarMensagem('Dê o seu palpite. 🤭');
  document.querySelector('.palpite').value = '';
  document.querySelector('.numero').textContent = '?';
});

// Declarações Elementos:
const paletaCores = document.querySelectorAll('.color');
const corPreta = document.querySelector('#preto');

// Requisito 4 - Adicione à página um quadro contendo 25 pixels.
function criarPixels(quant) {
  for (let i = 0; i < quant; i += 1) {
    const pixelLine = document.createElement('section');
    document.querySelector('#pixel-board').appendChild(pixelLine);
    for (let ii = 0; ii < quant; ii += 1) {
      const pixel = document.createElement('div');
      pixelLine.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}
criarPixels(5);

// Requisito 6 - Defina a cor preta como cor inicial da paleta de cores.
function selectedInicial() {
  for (let j = 0; j < paletaCores.length; j += 1) {
    if (paletaCores[j].classList.length > 1) {
      paletaCores[j].classList.remove('selected');
    }
  }
  corPreta.classList.add('selected');
}
window.onload = selectedInicial;

// Requisito 7 - Selecione uma cor na paleta de cores e preencha os pixels no quadro.
function selectedColor(event) {
  for (let j = 0; j < paletaCores.length; j += 1) {
    if (paletaCores[j].classList.length > 1) {
      paletaCores[j].classList.remove('selected');
    }
  }
  const corClicada = event.target;
  corClicada.classList.add('selected');
}
for (let jj = 0; jj < paletaCores.length; jj += 1) {
  paletaCores[jj].addEventListener('click', selectedColor);
}

// Requisito 8 - Preencha um pixel do quadro com a cor selecionada na paleta de cores.
function pintarPixels(evento) {
  const selected = document.querySelector('.selected');
  const corSelecionada = window.getComputedStyle(selected).getPropertyValue('background-color');
  const pixelClicado = evento.target;
  pixelClicado.style.backgroundColor = corSelecionada;
}
function colorir() {
  const pixels = document.querySelectorAll('.pixel');
  for (let k = 0; k < pixels.length; k += 1) {
    pixels[k].addEventListener('click', pintarPixels);
  }
}
colorir();

// Requisito 9 - Crie um botão que retorne a cor do quadro para a cor inicial.
const btnLimpar = document.createElement('button');
document.querySelector('#botoes').appendChild(btnLimpar);
btnLimpar.id = 'clear-board';
btnLimpar.className = 'btn';
btnLimpar.innerText = 'Limpar';
function limparTudo() {
  const pixels1 = document.querySelectorAll('.pixel');
  for (let kk = 0; kk < pixels1.length; kk += 1) {
    pixels1[kk].style.backgroundColor = 'white';
  }
}
btnLimpar.addEventListener('click', limparTudo);

// Requisitos Bonus:

// Requisito 10:
/* Criando input */
const input = document.createElement('input');
document.querySelector('#botoes').appendChild(input);
input.id = 'board-size';
input.type = 'number';
input.min = '1';
input.max = '50';

/* Criando botão */
const btnInput = document.createElement('button');
document.querySelector('#botoes').appendChild(btnInput);
btnInput.id = 'generate-board';
btnInput.className = 'btn';
btnInput.innerText = 'VQV';

function tamanhoQuadro() {
  if (input.value === '') {
    return alert('Board inválido!');
  }
  const pixels2 = document.querySelectorAll('.pixel');
  for (let l = 0; l < pixels2.length; l += 1) {
    pixels2[l].remove();
  }
  // Requisito 11:
  if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  criarPixels(input.value);
  colorir();
}
btnInput.addEventListener('click', tamanhoQuadro);

// Requisito 12:
function gerarCoresRGB() {
  for (let ll = 1; ll < paletaCores.length; ll += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const novasCores = `rgb(${r}, ${g}, ${b})`;
    paletaCores[ll].style.backgroundColor = (novasCores);
    console.log(novasCores);
  }
}
gerarCoresRGB();

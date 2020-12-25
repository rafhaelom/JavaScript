// Gerenciador de estados do jogo.
function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  cenas = {
    telaInicial,
    jogo
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
  jogo.setup();
  frameRate(40);
  somDoJogo.loop();
}

// Funcao que acompanho teclado.
function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
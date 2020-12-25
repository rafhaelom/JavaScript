class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textAlign(RIGHT); // Metodo centraliza texto(direita).
    fill('#fff'); // Metodo defini cor do texto.
    textSize(50); // Metodo defini tamanha do texto.
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  }
}
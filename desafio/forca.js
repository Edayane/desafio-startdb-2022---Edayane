class Forca {
  #palavra
  #letrasChutadas = [];
  #vidas
  #letrasPalavra = []

  constructor(palavra){
    this.#palavra = palavra;
    this.preencheArrayComUnderline();
    this.#vidas = 6;
  }

  preencheArrayComUnderline(){
    for (var i = 0; i < this.#palavra.length; i++) {
      this.#letrasPalavra[i] = "_";
    }   
  }

  chutar(letra) { 
    if(!this.verLetraRepetida(letra) && !this.maisDeUmaLetra(letra)) {
      if(this.#palavra.includes(letra)){
        this.insereLetraPosicaoPalavra(letra);
      } else{
        this.#vidas--;
      }
      //insere no array de letras chutadas
      this.inserirLetrasChutadas(letra);
    }
  }

  maisDeUmaLetra(letra){
    if(letra.length > 1)
      return true;
    return false;
  }

  verLetraRepetida(letra){
    if(this.#letrasChutadas.includes(letra)){
      return true;
    }
    return false;
  }

  inserirLetrasChutadas(letra){
    this.#letrasChutadas.push(letra);
  }

  insereLetraPosicaoPalavra(letra){
    for (var i = 0; i < this.#palavra.length; i++) {
      if(this.#palavra[i] === letra){
        this.#letrasPalavra[i] = letra;
      }
    }   
  }

  buscarEstado() {
    if(this.#vidas < 1)
      return "perdeu";
    if(!this.#letrasPalavra.includes("_"))
      return "ganhou";
    return "aguardando chute"; 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.#letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.#vidas, // Quantidade de vidas restantes
          palavra: this.#letrasPalavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;

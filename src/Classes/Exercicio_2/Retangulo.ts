import { FormatoDeElemento } from "./FormatoDeElemento"
export class Retangulo implements FormatoDeElemento {
  public comprimento: number = 0;
  public altura: number = 0;
  desenhar(): void {
    console.log('Desenhando um retângulo')
  }
  redimensionar(): void {
    console.log('Redimensionando um retângulo')
  }
}
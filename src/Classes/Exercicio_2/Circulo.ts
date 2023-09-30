import { FormatoDeElemento } from "./FormatoDeElemento"
export class Circulo implements FormatoDeElemento {
  public raio: number = 0;
  desenhar(): void {
    console.log('Desenhando um círculo')
  }
  redimensionar(): void {
    console.log('Redimensionando um círculo')
  }
}
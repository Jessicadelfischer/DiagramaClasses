import { Pedido } from './Classes/Exercicio_1/Pedido'
import { item } from './Classes/Exercicio_1/Item'
import { Circulo } from './Classes/Exercicio_2/Circulo'
import { Retangulo } from './Classes/Exercicio_2/Retangulo'

const pedido = new Pedido() 
const item1 = new item(10, 'Chiclete', 'Goma de mascar')  
const item2 = new item(20, 'Água', 'Água mineral')  
const item3 = new item(30, 'Suco', 'Laranja')

pedido.itens.push(item1, item2, item3)
console.log(pedido.itens)

const circulo = new Circulo()
circulo.desenhar()
circulo.redimensionar()
console.log(circulo.raio)
circulo.raio = 10
console.log(circulo.raio)

const retangulo = new Retangulo()
retangulo.desenhar()
retangulo.redimensionar()
retangulo.altura = 10
retangulo.comprimento = 20
console.log(retangulo.altura)
console.log(retangulo.comprimento)


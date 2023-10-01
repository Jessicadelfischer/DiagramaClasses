import { Tarefa } from "./Tarefa" 
export class SistemaDeTarefas {
  private tarefas: Tarefa[]
  constructor() {
    this.tarefas = []
  }
  adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa)
  }
  listarTarefas(): Tarefa[] {
    return this.tarefas
  }
}
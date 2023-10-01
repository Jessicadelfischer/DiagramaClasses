
export class Tarefa {
  private id: number
  private descricao: string
  private concluida: boolean

  constructor(id: number, descricao: string) {
    this.id = id
    this.descricao = descricao
    this.concluida = false
  }

  getId(): number {
    return this.id
  }

  getDescricao(): string {
    return this.descricao
  }

  estaConcluida(): boolean {
    return this.concluida
  }

  marcarComoConcluida(): void {
    this.concluida = true
  }

}



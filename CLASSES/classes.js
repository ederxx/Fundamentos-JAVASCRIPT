class Livro {
    constructor(nome, editora, paginas){
    this.nome = nome,
    this.editora = editora,
    this.paginas= paginas
    }
    anuciarTitulo() {
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas`)

    }
}

const NodeJS = new Livro ("Primeiros Passos com NodeJS", "Casa do Codigo", 195)

NodeJS.anuciarTitulo()
NodeJS.descreverTitulo()

class LivroColecao extends Livro  {

    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz árte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao(   "Logica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()
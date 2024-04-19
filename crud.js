let pessoa = [];

function gerarId() {

    return Math.floor(Math.random() * 10000);

}

let novaPessoa = {};

function cadastrarPessoa(novaPessoa) {

    novaPessoa.id = gerarId();
    pessoa.push(novaPessoa);

}

function atualizarPessoa(id, dadosAtualizados) {

    const pessoaId = pessoa.findIndex(pessoa => pessoa.id === id);
    Object.assign(pessoa[pessoaId], dadosAtualizados);

}

function deletarPessoa(id) {

    const pessoaId = pessoa.findIndex(pessoa => pessoa.id === id);
    pessoa.splice(pessoaId, 1);

}

function listarPessoas() {

    console.table(pessoa);

}

cadastrarPessoa({nome: "João Pedro Gonçalves", idade: 21, cidade: "Passo Fundo"});
cadastrarPessoa({nome: "João Pedro Voginski", idade: 22, cidade: "Passo Fundo"});

listarPessoas();

atualizarPessoa(pessoa[0].id, {nome: "João Pedro Voginski Gonçalves"});
listarPessoas();

deletarPessoa(1);
listarPessoas();

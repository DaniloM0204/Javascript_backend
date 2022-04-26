const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediaAlunos = [10,7,9,6];

let notasAlunos = [alunos,mediaAlunos];

const exibeNomeNota = (nomedoAluno) => {
    if (notasAlunos[0].includes(nomedoAluno)) {
        let indice = notasAlunos[0].indexOf(nomedoAluno);        
        return notasAlunos[0][indice] + ' sua media é ' + notasAlunos[1][indice];
    } else {
        return 'Aluno não cadastrado';
    }
}

console.log(exibeNomeNota("Ana"));
console.log(exibeNomeNota("João"));
console.log(exibeNomeNota("Danilo"));

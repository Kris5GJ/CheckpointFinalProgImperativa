let grupo = require('./alunos');

grupo.novoAluno("Pepito",[2],[5,8,6,8]);
grupo.novoAluno("Maria",[0],[9,8,9,7]);
grupo.novoAluno("Talita",[3],[6,8,5,5]);

let cursos = require('./cursos');

let lista=[];
for (aluno=0;aluno<grupo.alunos.length;aluno++){
    lista.push(grupo.alunos[aluno].nome);
}

cursos.novoCurso('Matemáticas_1',7.5,3,lista);
cursos.novoCurso('Español',8.25,3,lista);
cursos.novoCurso('Portugues',7.5,3,lista);

cursos.adicionarAluno('Español','Juanito');

console.log(cursos.cursos[1].listaEstudantes)

console.log(cursos.alunoAprovou('Maria','Español'))
console.log(cursos.alunoAprovou('Pepito','Español'))

console.log(cursos.verificarAlunos('Español'))

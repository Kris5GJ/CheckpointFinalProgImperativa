function Aluno(nome,faltas,notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  };  
  module.exports = {
    Aluno:Aluno,
    novoAluno:function(nome,faltas,notas){
      const novoAluno = new Aluno(nome,faltas,notas);
      this.alunos.push(novoAluno);
      return novoAluno;
    },
    alunos:[],

    calcularMedia : function (aluno){
        let somaNotas=0;
        let notas=aluno.notas;
        for (let val = 0; val < notas.length; val++) {
          somaNotas=somaNotas+notas[val];
        }
        let mediaNotas=somaNotas/notas.length;
        return mediaNotas
    },
    faltas : function (aluno){
      aluno.faltas++
      return aluno.faltas;
    }
  };

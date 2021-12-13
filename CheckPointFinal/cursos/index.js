function Curso(nome,notaAprovacao,faltasMax,listaEstudantes){
    this.nome=nome;
    this.notaAprovacao=notaAprovacao;
    this.faltasMax=faltasMax;
    this.listaEstudantes=listaEstudantes;
};

module.exports={
    Curso:Curso,
    novoCurso:function(nome,notaAprovacao,faltasMax,listaEstudantes){
        const novoCurso = new Curso(nome,notaAprovacao,faltasMax,listaEstudantes);
        this.cursos.push(novoCurso);
        return novoCurso;
      },
    cursos:[],
    adicionarAluno : function(nomeCurso,nomeAluno){ 
        //tentei de muitas formas que ao adicionar um aluno a um curso especifico a lista dos outros nao fosse alterada, nao consegui.
        for(i=0;i<this.cursos.length;i++){
            //console.log(this.cursos[i])
            if (this.cursos[i].nome==nomeCurso){
                console.log('in'+i)
                console.log(this.cursos[i].nome)
                this.cursos[i].listaEstudantes.push(nomeAluno)
            }
        }
        return console.log('Aluno ' +nomeAluno+ ' adicionado ao curso ' +nomeCurso)
    },
    alunoAprovou : function(nomeAluno,nomeCurso){
        let qtdFaltasCurso=0;
        let notaAprovacao=0;
        for(ii=0;ii<this.cursos.length;ii++){
            if(nomeCurso==this.cursos[ii].nome){
                qtdFaltasCurso=this.cursos[ii].faltasMax
                notaAprovacao=this.cursos[ii].notaAprovacao
            }
        }
        let grupo = require('../alunos');

        let mediaAluno=0;
        let faltas=0;
        for(let i=0;i<grupo.alunos.length;i++){
            if (grupo.alunos[i].nome==nomeAluno){
                mediaAluno=grupo.calcularMedia(grupo.alunos[i])
                faltas=grupo.alunos[i].faltas
            }
        }
        console.log(nomeAluno + ', media '+mediaAluno+', faltas '+faltas)
        let aprovou=false;
        if(faltas==qtdFaltasCurso){
            if(mediaAluno>(notaAprovacao+(notaAprovacao*0.1))){
                aprovou=true;
            }
        }else if(faltas<qtdFaltasCurso && mediaAluno>=notaAprovacao){
            aprovou=true;
        }
        aprovou ? console.log('Aprovou') : console.log('Não aprovou')
        return aprovou
    },
    verificarAlunos : function(nomeCurso){
        let grupo = require('../alunos');
        aprovados=[]
        for(let i=0;i<grupo.alunos.length;i++){
            aprovados.push(grupo.alunos[i].nome,this.alunoAprovou(grupo.alunos[i].nome,nomeCurso))
        }
        return aprovados;
    }
}
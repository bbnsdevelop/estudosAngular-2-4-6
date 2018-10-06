import { Injectable, EventEmitter } from '@angular/core';
import { Aluno } from '../alunos.model';
import { AlunosGuard } from '../../guards/alunos.guard';
import { IFormCandeactivate } from '../../guards/i-form-candeactivate';

@Injectable()
export class AlunosService implements IFormCandeactivate{
  disableNewAndEdit: boolean = false;
  constructor(private alunosGuard: AlunosGuard) { 

  }
  modarRota: boolean = false;
  private alunos: Aluno [] = [
    {id: 1, nome:'Bruno Batista', email:'brunno1808@hotmail.com' },
    {id: 2, nome:'Taciana Alves', email:'taciana@hotmail.com' },
    {id: 3, nome:'Dona Cricri', email:'cricri@hotmail.com'}
  ];
  emitirAluno = new EventEmitter<Aluno[]>();

  getAlunos(): Aluno[] {
    this.disableNewAndEdit = this.alunosGuard.IsPermissao;    
    return this.alunos;
  }
  getAluno(id: number ): Aluno {
    return this.alunos.find(res => res.id == id);
  }
  editAluno( aluno: Aluno){
    for(let i = 0; i < this.alunos.length; i++){
      if(this.alunos[i].id == aluno.id){
        this.alunos[i] = aluno;
        break
      }
    }    
  }
  setAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
  podeDesativar(){
    let confirma = confirm("Ao sair da tela você perderá os dados editados");
    return this.modarRota && confirma;
  }

}

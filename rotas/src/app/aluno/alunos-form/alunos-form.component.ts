import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../service/alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Aluno } from '../alunos.model';

@Component({
  selector: 'alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {
  enableCreateOrEdit: boolean = false;
  habilitarCriar: boolean = true;
  private mudou: boolean = false;
  inscricao: Subscription;
  aluno: Aluno;
  mostrarModal: boolean = false;
  constructor(private alunoService: AlunosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.enableCreateOrEdit = false;  
    this.mostrarModal = false;
    this.inscricao = this.route.params.subscribe((params: any) =>{
      let id = null;
      if(this.route.snapshot.url[0].path != "novo"){
        id = params['id'];
        let alunoEdit = this.alunoService.getAluno(id);
        this.aluno = new Aluno(alunoEdit.id, alunoEdit.nome, alunoEdit.email);              
      }        
      else{
        this.enableCreateOrEdit = true;
        let newId = this.alunoService.getAlunos().length + 1;
        this.aluno = new Aluno(newId, null, null);
      }
    });
  }
  confirmar() {
    this.alunoService.modarRota = false;    
    if(this.enableCreateOrEdit){
      this.alunoService.setAluno(this.aluno);
      this.router.navigate(['/alunos']);      
    }else{
      this.alunoService.editAluno(this.aluno);
    }
  }
  habilitarBtnCriar(){
    if(this.aluno.email != null && this.aluno.nome != null){
      this.habilitarCriar = false
    }else{
      this.habilitarCriar = true;
    }
  }

  onInput(){
    if(this.alunoService.modarRota == false) {
      this.mudou = !this.mudou;
      this.alunoService.modarRota = this.mudou;
    }
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}

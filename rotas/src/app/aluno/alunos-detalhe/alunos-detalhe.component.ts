import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../service/alunos.service';
import { Aluno } from '../alunos.model';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {
  
  inscricao: Subscription;
  aluno: Aluno;
  hideDetais: boolean;
  disableEdit: boolean;
  constructor(private route: ActivatedRoute, private alunoService: AlunosService, private router: Router) { }

  ngOnInit() {
    this. hideDetais = true;
    /*this.inscricao = this.route.params.subscribe((params: any) =>{
      let id = params['id'];
      this.aluno = this.alunoService.getAluno(id);
      this.alunoService.editAluno
    });*/
    this.inscricao = this.route.data.subscribe((info) =>{
      this.aluno = info.aluno;
    });
    this.disableEdit = this.alunoService.disableNewAndEdit;
  }
  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  esconderDetalhes(){
    this.hideDetais = !this.hideDetais;
    this.router.navigate(['/alunos']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}

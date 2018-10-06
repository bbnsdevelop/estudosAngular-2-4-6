import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AlunosService } from '../service/alunos.service';
import { Router } from '@angular/router';
import { Aluno } from '../alunos.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[];
  alunosObservable: Observable<AlunosService>;
  ngInit: boolean = true;
  disableEdit: boolean;
  constructor(private alunosService: AlunosService, private router: Router) { }

  ngOnInit() {
    this.alunosService.modarRota = false;
    this.alunos = this.alunosService.getAlunos();
    this.disableEdit = this.alunosService.disableNewAndEdit;
  }

  criarAluno(){
    this.router.navigate(['/alunos/novo']);
  }

}

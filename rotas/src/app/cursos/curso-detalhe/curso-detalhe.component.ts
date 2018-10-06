import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CursosService } from '../service/cursos.service';

@Component({
  selector: 'curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  
  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute, private cursoService: CursosService,
    private router: Router) {
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) =>{
      this.id = params['id'];
      this.curso = this.cursoService.getCurso(this.id);
      if(this.curso == null){
        this.router.navigate(['cursos/naoencontrado'])
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}

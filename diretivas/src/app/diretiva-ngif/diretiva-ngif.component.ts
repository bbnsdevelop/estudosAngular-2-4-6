import { Component, OnInit } from '@angular/core';
import { DiretivaNgifImplService } from './service/diretiva-ngif-impl.service';
import { DiretivaNgifService } from './service/impl/diretiva-ngIf-service';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  service: DiretivaNgifService;
  componente: string;

  cursos: string[] = ["Angular 2"];
  mostrarCurso: boolean = false;
  constructor() {
    this.service  = new DiretivaNgifImplService();
   }

  ngOnInit() {
    this.componente = this.service.buscaValor();   
  }

  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }
 

}

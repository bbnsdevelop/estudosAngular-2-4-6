import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {
  
  @Input('texto') texto: string;
  
  mostrarCurso: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarModal(evento){
    console.log(evento);
  }
  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }
}

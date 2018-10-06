import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["Angulr 2", "Java", "Phonegap"];

  getCursos(i){ 
    alert(this.cursos[i]);
  }
  constructor() { }

  ngOnInit() {
  }

}

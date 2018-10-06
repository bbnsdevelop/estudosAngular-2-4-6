import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {
  ativo: boolean = false;
  tamanhoFonte: number = 10;

  mudarAtivo(){
    this.ativo = !this.ativo;
  }
  constructor() { }

  ngOnInit() {
  }

}

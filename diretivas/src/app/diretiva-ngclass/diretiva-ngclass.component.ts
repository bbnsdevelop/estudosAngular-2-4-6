import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent implements OnInit {
  meuFaorito: boolean = false;
  onFavorito(){
    this.meuFaorito = !this.meuFaorito;
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'compo-control',
  templateUrl: './compo-control.component.html',
  styleUrls: ['./compo-control.component.css']
})
export class CompoControlComponent implements OnInit {

  @Input('mostraErro') mostrarErro: boolean;
  @Input('msgErro') mensagem: string;

  constructor() { }

  ngOnInit() {
  }

}

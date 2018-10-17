import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any ={
    nome: 'Bruno',
    email: 'brunno1808@hotmail.com'
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formu){
    console.log(formu);
    console.log(this.usuario);
  }

}

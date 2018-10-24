import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   
   /* this.formulario = new FormGroup({
      nome: new FormControl('Bruno'),
      email: new FormControl('brunno1808@hotmail.com')
    });
    */
    this.formulario = this.formBuilder.group({
      nome: ['Bruno'],
      email: ['brunno1808@hotmail.com']
    });
  }

}

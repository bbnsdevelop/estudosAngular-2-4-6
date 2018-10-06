import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNaoEncontradoComponent } from './cursos-nao-encontrado.component';

describe('CursosNaoEncontradoComponent', () => {
  let component: CursosNaoEncontradoComponent;
  let fixture: ComponentFixture<CursosNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

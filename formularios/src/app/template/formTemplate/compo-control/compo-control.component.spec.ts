import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoControlComponent } from './compo-control.component';

describe('CompoControlComponent', () => {
  let component: CompoControlComponent;
  let fixture: ComponentFixture<CompoControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

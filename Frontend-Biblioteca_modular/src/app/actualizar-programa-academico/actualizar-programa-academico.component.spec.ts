import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProgramaAcademicoComponent } from './actualizar-programa-academico.component';

describe('ActualizarProgramaAcademicoComponent', () => {
  let component: ActualizarProgramaAcademicoComponent;
  let fixture: ComponentFixture<ActualizarProgramaAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProgramaAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarProgramaAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

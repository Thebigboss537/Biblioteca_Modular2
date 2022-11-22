import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoMaterialComponent } from './actualizar-tipo-material.component';

describe('ActualizarTipoMaterialComponent', () => {
  let component: ActualizarTipoMaterialComponent;
  let fixture: ComponentFixture<ActualizarTipoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTipoMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTipoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

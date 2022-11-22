import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoMaterialComponent } from './crear-tipo-material.component';

describe('CrearTipoMaterialComponent', () => {
  let component: CrearTipoMaterialComponent;
  let fixture: ComponentFixture<CrearTipoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

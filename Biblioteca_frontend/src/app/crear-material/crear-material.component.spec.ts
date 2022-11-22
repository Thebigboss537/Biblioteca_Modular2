import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMaterialComponent } from './crear-material.component';

describe('CrearMaterialComponent', () => {
  let component: CrearMaterialComponent;
  let fixture: ComponentFixture<CrearMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

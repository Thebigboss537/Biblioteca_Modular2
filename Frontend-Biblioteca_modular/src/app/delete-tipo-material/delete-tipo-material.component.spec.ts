import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipoMaterialComponent } from './delete-tipo-material.component';

describe('DeleteTipoMaterialComponent', () => {
  let component: DeleteTipoMaterialComponent;
  let fixture: ComponentFixture<DeleteTipoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTipoMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTipoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

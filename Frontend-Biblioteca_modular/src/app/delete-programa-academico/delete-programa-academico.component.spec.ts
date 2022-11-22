import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProgramaAcademicoComponent } from './delete-programa-academico.component';

describe('DeleteProgramaAcademicoComponent', () => {
  let component: DeleteProgramaAcademicoComponent;
  let fixture: ComponentFixture<DeleteProgramaAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProgramaAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProgramaAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

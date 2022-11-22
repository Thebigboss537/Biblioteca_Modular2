import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPrestadoComponent } from './material-prestado.component';

describe('MaterialPrestadoComponent', () => {
  let component: MaterialPrestadoComponent;
  let fixture: ComponentFixture<MaterialPrestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPrestadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPrestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

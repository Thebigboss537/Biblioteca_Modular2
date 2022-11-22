import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialReservadoComponent } from './material-reservado.component';

describe('MaterialReservadoComponent', () => {
  let component: MaterialReservadoComponent;
  let fixture: ComponentFixture<MaterialReservadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialReservadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialReservadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

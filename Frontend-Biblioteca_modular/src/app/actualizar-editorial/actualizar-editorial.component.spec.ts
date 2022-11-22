import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEditorialComponent } from './actualizar-editorial.component';

describe('ActualizarEditorialComponent', () => {
  let component: ActualizarEditorialComponent;
  let fixture: ComponentFixture<ActualizarEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

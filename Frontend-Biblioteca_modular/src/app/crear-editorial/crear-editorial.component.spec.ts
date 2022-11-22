import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditorialComponent } from './crear-editorial.component';

describe('CrearEditorialComponent', () => {
  let component: CrearEditorialComponent;
  let fixture: ComponentFixture<CrearEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

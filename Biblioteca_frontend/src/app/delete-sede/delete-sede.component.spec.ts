import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSedeComponent } from './delete-sede.component';

describe('DeleteSedeComponent', () => {
  let component: DeleteSedeComponent;
  let fixture: ComponentFixture<DeleteSedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

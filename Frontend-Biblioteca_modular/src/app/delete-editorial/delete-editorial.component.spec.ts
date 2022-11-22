import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEditorialComponent } from './delete-editorial.component';

describe('DeleteEditorialComponent', () => {
  let component: DeleteEditorialComponent;
  let fixture: ComponentFixture<DeleteEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEditorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

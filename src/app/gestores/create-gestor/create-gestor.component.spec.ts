import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGestorComponent } from './create-gestor.component';

describe('CreateGestorComponent', () => {
  let component: CreateGestorComponent;
  let fixture: ComponentFixture<CreateGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGestorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

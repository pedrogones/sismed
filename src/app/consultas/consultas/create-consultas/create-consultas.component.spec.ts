import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsultasComponent } from './create-consultas.component';

describe('CreateConsultasComponent', () => {
  let component: CreateConsultasComponent;
  let fixture: ComponentFixture<CreateConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateConsultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

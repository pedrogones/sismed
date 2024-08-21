import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPacienteComponent } from './edit-paciente.component';

describe('EditPacienteComponent', () => {
  let component: EditPacienteComponent;
  let fixture: ComponentFixture<EditPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

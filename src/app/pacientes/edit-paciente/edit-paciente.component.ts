import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../shared/services.service';

@Component({
  selector: 'app-edit-paciente',
  standalone: true,
  imports: [],
  templateUrl: './edit-paciente.component.html',
  styleUrl: './edit-paciente.component.scss'
})
export class EditPacienteComponent implements OnInit{

  constructor(private sharedServices: ServicesService) { }

  ngOnInit(): void {

  }
  maskCpf(event: Event): void {
    this.sharedServices.maskInputCPF(event);
  }

}

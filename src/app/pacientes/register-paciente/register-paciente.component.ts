import { Component } from '@angular/core';
import { ServicesService } from '../../../shared/services.service';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-register-paciente',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './register-paciente.component.html',
  styleUrl: './register-paciente.component.scss'
})
export class RegisterPacienteComponent {
  constructor(private sharedServices: ServicesService) { }

  ngOnInit(): void {

  }
  maskCpf(event: Event): void {
    this.sharedServices.maskInputCPF(event);
  }
}

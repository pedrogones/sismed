import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { RegisterComponent } from '../register/register.component';
declare var $: any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  openRegisterPacienteModal(): void {
    $('#registerPaciente').modal('show');
  }
}

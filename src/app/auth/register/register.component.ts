import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  onSubmit(): void {
    console.log('Consulta marcada');
  }

  closeModal(id: string){
    $(`#${id}`).modal('hide');
  }
}

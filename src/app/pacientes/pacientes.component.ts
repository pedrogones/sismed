import { Component } from '@angular/core';
import { SharedMessagesService } from '../../shared-messages/shared-messages.service';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export class PacientesComponent {

  constructor(private sharedMessage: SharedMessagesService){

  }

  search(){
    this.sharedMessage.warningMessageSwal("Método de busca não implementado");
  }
  remove(){
      this.sharedMessage.warningMessageSwal("Método delete não implementado");
  }
  update(){
    this.sharedMessage.warningMessageSwal("Método update não implementado");
  }
}

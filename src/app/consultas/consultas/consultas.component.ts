import { Component } from '@angular/core';
import { SharedMessagesService } from '../../shared-messages/shared-messages.service';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.scss'
})
export class ConsultasComponent {
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

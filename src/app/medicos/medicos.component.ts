import { Component } from '@angular/core';
import { SharedMessagesService } from '../shared-messages/shared-messages.service';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.scss'
})
export class MedicosComponent {
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

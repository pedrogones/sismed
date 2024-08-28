import { Component } from '@angular/core';
import { SharedMessagesService } from '../shared-messages/shared-messages.service';
import { SpinnerComponent } from "../layouts/spinner/spinner.component";
import { CommonModule } from '@angular/common';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-gestores',
  standalone: true,
  imports: [SpinnerComponent, CommonModule],
  templateUrl: './gestores.component.html',
  styleUrl: './gestores.component.scss'
})
export class GestoresComponent {
  isLoading: boolean = false;
  constructor(private sharedMessage: SharedMessagesService){

  }
  search(){
    this.isLoading = true;
    setTimeout(() => {
      this.sharedMessage.warningMessageSwal("Método de busca não implementado");
      this.isLoading = false;
    }, 2000);
  }
  remove(){
    this.isLoading = true;
    setTimeout(() => {
      this.sharedMessage.warningMessageSwal("Método delete não implementado");
      this.isLoading = false;
    }, 2000);
  }
  update(){
    this.isLoading = true;
    setTimeout(() => {
    this.sharedMessage.warningMessageSwal("Método update não implementado");
    this.isLoading = false;
  }, 2000);
  }
}

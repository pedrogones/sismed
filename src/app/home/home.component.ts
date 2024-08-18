import { SharedMessagesService } from './../shared-messages/shared-messages.service';
import { Component } from '@angular/core';
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FiltersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private sharedMessage: SharedMessagesService){

  }

  seeDetails(){
      this.sharedMessage.errorMessageSwal("Método não implementado");
  }

}

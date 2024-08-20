import { SharedMessagesService } from './../shared-messages/shared-messages.service';
import { Component } from '@angular/core';
import { FiltersComponent } from "../filters/filters.component";
import { SpinnerComponent } from '../layouts/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FiltersComponent, SpinnerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isLoading: boolean = false;

  constructor(private sharedMessage: SharedMessagesService){

  }

  seeDetails() {
    this.isLoading = true;

    setTimeout(() => {
      this.sharedMessage.errorMessageSwal("Método não implementado");
      this.isLoading = false;
    }, 2000);
  }
}

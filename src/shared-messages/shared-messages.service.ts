import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class SharedMessagesService {


  constructor(){

  }

  sucssesMessageSwal(message: string) {
    return Swal.fire({
        icon: 'success',
        text: message
    })
  }
  errorMessageSwal(message: string) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonText: 'OK'
    });
  }
  warningMessageSwal(message: string) {
    return Swal.fire({
      icon: 'warning',
      title: 'Atenção!',
      text: message,
      confirmButtonText: 'OK'
    });
  }


}

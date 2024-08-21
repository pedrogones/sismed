import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  maskInputCPF(event: any): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    input.value = value;
}
}

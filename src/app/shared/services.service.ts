import { Endereco } from './../models/endereco';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedMessagesService } from '../shared-messages/shared-messages.service';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private cepuRL: string = 'https://viacep.com.br/ws';
  constructor(private http: HttpClient, private messages: SharedMessagesService) { }

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
  maskInputCEP(event: any): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 8) {
        value = value.slice(0, 8);
    }

    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    input.value = value;
  }
  loadCep(cep: string): Observable<Endereco | null> {
    const url = `${this.cepuRL}/${cep}/json/`;

    return this.http.get<Endereco>(url).pipe(
      map(data => {
        if (data && data.cep) {
          return data;
        } else {
          this.messages.errorMessageSwal("CEP não encontrado");
          return null;
        }
      }),
      catchError(error => {
        this.messages.errorMessageSwal("Erro ao buscar o CEP");
        return of(null);
      })
    );
  }
}

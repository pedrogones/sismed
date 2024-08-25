import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../shared/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Endereco } from '../../models/endereco';
import { SpinnerComponent } from '../../layouts/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-paciente',
  standalone: true,
  imports: [SpinnerComponent, CommonModule],
  templateUrl: './create-paciente.component.html',
  styleUrl: './create-paciente.component.scss'
})
export class CreatePacienteComponent implements OnInit {
  isLoading: boolean = false;

  endereco: Endereco | null = null;
  enderecoForm: FormGroup;

  constructor(private fb: FormBuilder, private sharedsServices: ServicesService) {
    this.enderecoForm = this.fb.group({
      cep: ['', Validators.required],
      estado: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      rua: [{ value: '', disabled: true }],
      numero: ['', Validators.required],
      complemento: ['']
    });
  }
  ngOnInit(): void {

  }

  maskCpf(cpf: Event){
    this.sharedsServices.maskInputCPF(cpf);
  }

  maskCEP(cep: any){
    this.sharedsServices.maskInputCEP(cep);
  }
  buscarEndereco(cep: any) {
    const input = cep.target as HTMLInputElement;
    const cepValue = input.value.trim();
    console.log(cepValue)
    if (!cepValue) {
      this.endereco = null;
      return;
    }
    this.isLoading = true;
    this.sharedsServices.loadCep(cepValue).subscribe(
      (data) => {
        this.endereco = data;
        this.preencherCamposEndereco();
      },
      (error) => {
        this.endereco = null;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  preencherCamposEndereco() {
    if (this.endereco) {
      const estadoInput = document.getElementById('estadoPaciente') as HTMLInputElement | null;
      const cidadeInput = document.getElementById('cidadePaciente') as HTMLInputElement | null;
      const ruaInput = document.getElementById('ruaPaciente') as HTMLInputElement | null;
      const numeroInput = document.getElementById('numeroPaciente') as HTMLInputElement | null;
      const complementoInput = document.getElementById('complementoPaciente') as HTMLInputElement | null;

      if (estadoInput && cidadeInput && ruaInput && numeroInput && complementoInput) {
        estadoInput.value = this.endereco.uf || '';
        cidadeInput.value = this.endereco.localidade || '';
        ruaInput.value = this.endereco.logradouro || '';
        numeroInput.focus();
        complementoInput.value = this.endereco.complemento || '';
      }
    }
  }


}

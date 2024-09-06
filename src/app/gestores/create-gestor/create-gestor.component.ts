import { Component } from '@angular/core';
import { SpinnerComponent } from '../../layouts/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../../shared/services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco } from '../../../models/endereco';

@Component({
  selector: 'app-create-gestor',
  standalone: true,
  imports: [SpinnerComponent, CommonModule],
  templateUrl: './create-gestor.component.html',
  styleUrl: './create-gestor.component.scss'
})
export class CreateGestorComponent {
  endereco: Endereco | null = null;
  enderecoForm: FormGroup;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private sharedsServices: ServicesService){
    this.enderecoForm = this.fb.group({
      cep: ['', Validators.required],
      estado: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      rua: [{ value: '', disabled: true }],
      numero: ['', Validators.required],
      complemento: ['']
    });
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
    if (!cepValue || cepValue.length < 7) {
      this.endereco = null;
      return;
    }
    this.sharedsServices.loadCep(cepValue).subscribe(
      (data) => {
        if (data) {
          this.endereco = data;
          this.preencherCamposEndereco();
        } else {
          this.clearCepField()
          this.endereco = null;
        }
        this.isLoading = false;
      },
      (error) => {
        this.clearCepField()
        this.isLoading = false;
      }
    );
  }

  preencherCamposEndereco() {
    if (this.endereco) {
      const estadoInput = document.getElementById('estadoGestor') as HTMLInputElement | null;
      const cidadeInput = document.getElementById('cidadeGestor') as HTMLInputElement | null;
      const ruaInput = document.getElementById('ruaGestor') as HTMLInputElement | null;
      const numeroInput = document.getElementById('numeroGestor') as HTMLInputElement | null;
      const complementoInput = document.getElementById('complementoGestor') as HTMLInputElement | null;

      if (estadoInput && cidadeInput && ruaInput && numeroInput && complementoInput) {
        estadoInput.value = this.endereco.uf || '';
        cidadeInput.value = this.endereco.localidade || '';
        ruaInput.value = this.endereco.logradouro || '';
        numeroInput.focus();
        complementoInput.value = this.endereco.complemento || '';
      }
    }
  }
  private clearCepField() {
    const cepInput = document.getElementById('cepGestor') as HTMLInputElement | null;
    if (cepInput) {
      cepInput.value = '';
    }
  }

}

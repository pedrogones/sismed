import { Component, OnInit } from '@angular/core';
import { SharedMessagesService } from '../../shared-messages/shared-messages.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateConsultasComponent } from './create-consultas/create-consultas.component';
import { Consulta } from '../../models/consulta';
import { FormsModule } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [CreateConsultasComponent, FormsModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.scss'
})
export class ConsultasComponent  implements OnInit{
  constructor(private sharedMessage: SharedMessagesService){

  }
  consulta: Consulta = {
    idConsulta: null,
    paciente: null,
    medico: null,
    dataConsulta: null,
    motivoConsulta: '',
    valorConsulta: 300
  };
  ngOnInit() {

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

  onSubmit(): void {
    console.log('Consulta marcada:', this.consulta);
  }
  openCreateConsultasModal(): void {
    $('#createConsultaModal').modal('show');
  }
  closeModal(id: string): void {
  console.log(`#${id}`);
    $(`#${id}`).modal('hide');
  }

}

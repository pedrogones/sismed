import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Consulta } from '../../../models/consulta';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-create-consultas',
  standalone: true,
  imports: [MatDialogModule, FormsModule, CommonModule],
  templateUrl: './create-consultas.component.html',
  styleUrl: './create-consultas.component.scss'
})
export class CreateConsultasComponent {

  consulta: Consulta = {
    idConsulta: null,
    paciente: null,
    medico: null,
    dataConsulta: null,
    motivoConsulta: '',
    valorConsulta: 300
  };
  showHourOptions = false;
  selectedHour: string | null = null;
  availableTimes = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  toggleHourSelection() {
    this.showHourOptions = !this.showHourOptions;
  }
  selectHour(time: string) {
    this.selectedHour = time;
    this.showHourOptions = false;
  }

  pacientes = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' }
  ];

  medicos = [
    { id: 1, nome: 'Dr. Pedro Santos' },
    { id: 2, nome: 'Dra. Ana Souza' }
  ];

  horas = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  selectHora(hora: string): void {
    console.log('Hora selecionada:', hora);
  }

  onSubmit(): void {
    console.log('Consulta marcada:', this.consulta);
  }

  closeModal(id: string){
    $(`#${id}`).modal('hide');
  }

}

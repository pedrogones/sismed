import { Routes } from '@angular/router';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ConsultasComponent } from './consultas/consultas/consultas.component';
import { AppComponent } from './app.component';
import { RenderComponent } from './layouts/render/render.component';
import { MedicosComponent } from './medicos/medicos.component';
import { LoginComponent } from './auth/login/login.component';
import { EditPacienteComponent } from './pacientes/edit-paciente/edit-paciente.component';
import { RegisterPacienteComponent } from './pacientes/register-paciente/register-paciente.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: RenderComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'consultas', component: ConsultasComponent },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'pacientes/edit', component: EditPacienteComponent },

      { path: 'medicos', component: MedicosComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-cliente', component: RegisterPacienteComponent },

];


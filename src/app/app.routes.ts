import { Routes } from '@angular/router';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { AppComponent } from './app.component';
import { RenderComponent } from './layouts/render/render.component';
import { MedicosComponent } from './medicos/medicos.component';
import { LoginComponent } from './auth/login/login.component';
import { EditPacienteComponent } from './pacientes/edit-paciente/edit-paciente.component';
import { RegisterPacienteComponent } from './pacientes/register-paciente/register-paciente.component';
import { CreatePacienteComponent } from './pacientes/create-paciente/create-paciente.component';
import { GestoresComponent } from './gestores/gestores.component';
import { CreateGestorComponent } from './gestores/create-gestor/create-gestor.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: RenderComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'consultas', component: ConsultasComponent },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'pacientes/1/edit', component: EditPacienteComponent },
      { path: 'pacientes/create', component: CreatePacienteComponent },
      { path: 'medicos', component: MedicosComponent },
      { path: 'gestores', component: GestoresComponent },
      { path: 'gestores/create', component: CreateGestorComponent },
      { path: 'meu-perfil', component: ProfileComponent }

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-cliente', component: RegisterPacienteComponent },

];


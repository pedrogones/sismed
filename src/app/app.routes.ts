import { Routes } from '@angular/router';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ConsultasComponent } from './consultas/consultas/consultas.component';
import { AppComponent } from './app.component';
import { RenderComponent } from './layouts/render/render.component';
import { MedicosComponent } from './medicos/medicos.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: RenderComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'consultas', component: ConsultasComponent },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'medicos', component: MedicosComponent }
    ]
  },
  { path: 'login', component: LoginComponent },

];


import { Routes } from '@angular/router';
import { GymListComponent } from './components/gym-list/gym-list.component';
import { MachineAddComponent } from './components/machine-add/machine-add.component';
import { EntrenadoresComponent } from './components/entrenadores/entrenadores.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';

export const routes: Routes = [
  // El inicio ('') vuelve a ser la lista de máquinas
  { path: '', component: GymListComponent }, 
  { path: 'agregar', component: MachineAddComponent }, 
  { path: 'entrenadores', component: EntrenadoresComponent }, 
  { path: 'sucursales', component: SucursalesComponent }, 

  // Comodín por si escribes algo mal en la URL
  { path: '**', redirectTo: '' } 
];
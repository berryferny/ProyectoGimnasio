import { Routes } from '@angular/router';
import { GymListComponent } from './components/gym-list/gym-list.component';

export const routes: Routes = [
  { path: '', component: GymListComponent },
  { path: 'gimnasio', component: GymListComponent }
];
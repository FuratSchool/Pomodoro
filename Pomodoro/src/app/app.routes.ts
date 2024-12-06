import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TimerComponent },
  { path: 'settings', component: SettingsComponent },

];

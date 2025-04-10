import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Adaptaciones3dComponent } from './pages/adaptaciones3d/adaptaciones3d.component';
import { EdetecComponent } from './pages/edetec/edetec.component';
import { InfotecComponent } from './pages/infotec/infotec.component';
import { LabticComponent } from './pages/labtic/labtic.component';
import { LateComponent } from './pages/late/late.component';
import { MecatronicaComponent } from './pages/mecatronica/mecatronica.component';
import { ProgresarComponent } from './noticias/becas/progresar/progresar.component';
import { BelgranoComponent } from './noticias/becas/belgrano/belgrano.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adaptaciones', component: Adaptaciones3dComponent },
  { path: 'edetec', component: EdetecComponent },
  { path: 'infotec', component: InfotecComponent },
  { path: 'labtic', component: LabticComponent },
  { path: 'late', component: LateComponent },
  { path: 'mecatronica', component: MecatronicaComponent },
  { path: 'progresar', component: ProgresarComponent },
  { path: 'belgrano', component: BelgranoComponent },
  { path: '**', redirectTo: '' }
];

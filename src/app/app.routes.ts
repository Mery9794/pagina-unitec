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
import { NoticiaDetalleComponent } from './noticias/laboratorio/noticia-detalle/noticia-detalle.component';
import { ArduinoComponent } from './pages/arduino/arduino.component';
import { SectoresComponent } from './noticias/sectores/sectores.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adaptaciones', component: Adaptaciones3dComponent },
  { path: 'edetec', component: EdetecComponent },
  { path: 'infotec', component: InfotecComponent },
  { path: 'arduino', component: ArduinoComponent },
  { path: 'labtic', component: LabticComponent },
  { path: 'late', component: LateComponent },
  { path: 'mecatronica', component: MecatronicaComponent },
  { path: 'progresar', component: ProgresarComponent },
  { path: 'belgrano', component: BelgranoComponent },
  
  { path: 'noticias/:id', component: NoticiaDetalleComponent },
   { path: 'proyectos/:id', component: SectoresComponent },


  { path: '**', redirectTo: '' }

];

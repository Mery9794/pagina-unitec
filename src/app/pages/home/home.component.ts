import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from "../../components/banner/banner.component";
import { LaboratorioComponent } from "../../noticias/laboratorio/laboratorio.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, BannerComponent, LaboratorioComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  laboratorios = [
  { nombre: 'EDETEC', logo: 'assets/logos/logo-edetec.jpg', ruta:'edetec' },
  { nombre: 'InfoTEC', logo: 'assets/logos/logo-infotec.jpg', ruta:'infotec' },
  { nombre: 'ARDUINO', logo: 'assets/logos/logo-arduino.jpg', ruta:'arduino' },
  { nombre: 'Técnicas 3D', logo: 'assets/logos/logo-tecnicas3d.jpg', ruta:'adaptaciones' },
  { nombre: 'LATE', logo: 'assets/logos/logo-late.jpg', ruta:'late' },
  { nombre: 'MECATRONICA', logo: 'assets/logos/logo-mecatronica.jpg', ruta:'mecatronica' },
  { nombre: 'LabTIC', logo: 'assets/logos/logo-labtic.jpg', ruta:'labtic' },
];

seleccionado: number = -1;

seleccionarLaboratorio(index: number) {
  this.seleccionado = index;
}

getEspaciosRellenoLados(): { antes: any[]; despues: any[] } {
  const total = this.laboratorios.length;
  const resto = total % 3;

  if (resto === 1) {
    return { antes: [0], despues: [0] };
  } else if (resto === 2) {
    return { antes: [], despues: [0] };
  } else {
    return { antes: [], despues: [] };
  }
}

}
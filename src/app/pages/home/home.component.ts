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
    { nombre: 'EDETEC', logo: 'assets/logos/logo-edetec.jpg', ruta: 'edetec', fondo: 'assets/img/EDETEC.jpg' },
    { nombre: 'INFOTEC', logo: '', ruta: 'infotec', fondo: 'assets/img/InfoTEC.jpg' },
    { nombre: '', logo: 'assets/logos/logo-arduino.jpg', ruta: 'arduino', fondo: 'assets/img/Arduino.jpg' },
    { nombre: 'TECNICAS 3D', logo: '', ruta: 'adaptaciones', fondo: 'assets/img/3D.jpg' },
    { nombre: '', logo: 'assets/logos/logo-late.jpg', ruta: 'late', fondo: 'assets/img/LATE.png' },
    { nombre: 'MECATRONICA', logo: 'assets/logos/logo-mecatronica.jpg', ruta: 'mecatronica', fondo: 'assets/img/Mecatronica.jpeg' },
    { nombre: 'LABTIC', logo: '', ruta: 'labtic', fondo: 'assets/img/LasbTIC.jpg' },
  ];

  seleccionado: number = -1;

  seleccionarLaboratorio(index: number) {
    this.seleccionado = index;
  }

  get laboratoriosCentrados() {
    const base = [...this.laboratorios];
    const total = base.length;
    const resto = total % 3;

    if (resto === 1) {
      // Extraemos el último laboratorio
      const lastLab = base.pop();
      // Insertamos vacío - último laboratorio - vacío
      return [...base, null, lastLab, null];
    } else if (resto === 2) {
      return [...base, null];
    } else {
      return base;
    }
  }


}

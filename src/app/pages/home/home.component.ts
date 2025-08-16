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
    { nombre: 'EDETEC', logo: '', ruta: 'edetec', fondo: 'assets/logos/jy.png', descripcion: 'Desarrollos Tecnológicos' },
    { nombre: 'INFOTEC', logo: '', ruta: 'infotec', fondo: 'assets/img/InfoTEC.jpg', descripcion: 'Desarrollo de aplicaciones para PcD y WebPage de UNITEC' },
    { nombre: '', logo: '', ruta: 'arduino', fondo: 'assets/img/Arduino.jpg', descripcion: 'Desarrollo de adaptaciones con el microcontrolador Arduino' },
    { nombre: '', logo: 'assets/logos/logo-tecnicas3d1.png', ruta: 'adaptaciones', fondo: 'assets/img/3D.1.jpg', descripcion: 'Diseño e impresión en 3D' },
    { nombre: '', logo: 'assets/logos/logo-late.jpg', ruta: 'late', fondo: 'assets/img/LATE.png', descripcion: 'Asistencia Técnica a Establecimientos de Educación Especial' },
    { nombre: 'MECATRONICA', logo: 'assets/logos/logo-mecatronica.jpg', ruta: 'mecatronica', fondo: 'assets/img/Mecatronica.jpeg', descripcion: 'Desarrollo de aplicaciones para la Domótica y Electromedicina' },
    { nombre: 'LABTIC', logo: '', ruta: 'labtic', fondo: 'assets/img/LasbTIC.jpg', descripcion: 'Desarrollo de Hardware y Software con orientación al uso de TICs' },
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
      const lastLab = base.pop();
      //vacío - último laboratorio - vacío
      return [...base, null, lastLab, null];
    } else if (resto === 2) {
      return [...base, null];
    } else {
      return base;
    }
  }


}

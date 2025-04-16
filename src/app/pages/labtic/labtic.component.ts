import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectoresComponent } from "../../noticias/sectores/sectores.component";

@Component({
  selector: 'app-labtic',
  standalone: true,
  templateUrl: './labtic.component.html',
  styleUrls: ['./labtic.component.css'],
  imports: [CommonModule, SectoresComponent]
})
export class LabticComponent {
  lab = {
    nombre: 'LABTIC',
    descripcion: 'Laboratorio de Tecnologías de la Información y la Comunicación',
    logo: 'assets/logos/logo-labtic.jpg',
    supervisores: [
      'Ing. Marcelo', 
      'Fernández Busse',
      'Lic. José Alberto',
      'Ferreyra'
    ],
    colaboradores: [
      'Juan Marcos Malanga',
      'Simón López',
      'Valentín Atanasof'
    ],
    queHacemos: `  Nos enfocamos en la adaptación de computadoras reacondicionadas por el laboratorio LATE,
      incorporando software diseñado especialmente por nuestro equipo o herramientas asistivas como
      lectores de pantalla, teclados virtuales, magnificadores, sintetizadores de voz, mouses ópticos y
      otros recursos que facilitan la accesibilidad. `,
    objetivo: ` Promover la inclusión digital mediante la adecuación tecnológica de equipos, brindando soluciones
      personalizadas que permiten a más personas acceder y utilizar dispositivos informáticos de manera
      autónoma.`
  };
  galeriaLabtic = [
    { imagen: 'assets/img/', descripcion: '' },
    { imagen: 'assets/img/', descripcion: '' },
    { imagen: 'assets/img/', descripcion: '' }
  ];
  
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

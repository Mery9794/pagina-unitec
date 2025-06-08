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
    nombre: 'LabTic',
    descripcion: 'Espacio de desarrollo de Hardware y Software con orientación al uso de TICs',
    logo: 'assets/logos/logo-labtic.jpg',
    supervisores: [
      'Ing. Marcelo Fernández Busse',
      'Lic. José Alberto Ferreyra'
    ],
    colaboradores: [
      'Juan Marcos Malanga',
      'Simón López',
      'Valentín Atanasof'
    ],
    queHacemos: ` Espacio orientado a la adaptación y reacondicionamiento de computadoras, en articulación con el programa LATE.
      Se instalan herramientas tecnológicas que permiten la accesibilidad digital de personas con discapacidad.`,
    objetivo: ` Desarrollar y aplicar soluciones tecnológicas mediante la instalación de software asistivo (como lectores de pantalla, 
    teclados virtuales, magnificadores, sintetizadores de voz, mouses ópticos, etc.) y software propietario desarrollado por el propio 
    laboratorio. Estas acciones buscan garantizar el acceso igualitario a las TICs.`
  };
  galeriaLabtic = [
    { imagen: 'assets/img/', descripcion: '' }
  ];

  descargas = [
    {
      nombre: 'Catálogo de proyectos',
      archivo: 'assets/descargas/catalogo-proyectos.pdf'
    }
  ];
  
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

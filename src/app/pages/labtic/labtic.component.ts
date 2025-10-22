import { Component, OnInit } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'; // <-- el genérico

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };

@Component({
  selector: 'app-labtic',
  standalone: true,
  templateUrl: './labtic.component.html',
  imports: [LabsComponent]
})
export class LabticComponent implements OnInit {
  lab = {
    nombre: 'LabTic',
    descripcion: 'Espacio de desarrollo de Hardware y Software con orientación al uso de TICs',
    logo: 'assets/logos/logo-labtic1.png',
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
    laboratorio. Estas acciones buscan garantizar el acceso igualitario a las TICs.`,
    sector: 'labtic'
  };

  galeria = [];

  proyectos: Proyecto[] = [
    { id: 3, nombre: 'Adaptación de Terminales', descripcion: 'Articulando sus tareas con LATE, el espacio de trabajo e investigación LabTIC se encarga de adecuar y adaptar equipos informáticos, mediante la instalación de programas informáticos especializados. Estos pueden ser herramientas de accesibilidad tales como lectores de pantallas, teclados virtuales, sistemas aumentativos y alternativos de comunicación, emuladores de mouse, entre otros;  o de apoyo en la intervención de personas con discapacidad intelectual, cognitiva, sensorial o motora.', imagen: 'assets/proyectos/terminales.png' }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infotec',
  standalone: true,
  templateUrl: './infotec.component.html',
  styleUrls: ['./infotec.component.css'],
  imports: [CommonModule]
})
export class InfotecComponent {
  lab = {
    nombre: 'INFOTEC',
    descripcion: 'Innovación y desarrollo en tecnologías de la información',
    logo: 'assets/logos/logo-infotec.jpg',
    supervisores: [
      'Manuel Teves',
      'María Solange Catañeda Pariona'
    ],
    colaboradores: [
      'Jenaro Luciano',
      'Cecacci Porrez',
      'Amílcar Catriel Paz'
    ],
    queHacemos: `INFOTEC es un espacio de extensión de UNiTEC dedicado a la investigación, desarrollo e implementación
    de soluciones tecnológicas en el ámbito del software, redes y sistemas inteligentes. Está orientado
    principalmente a la enseñanza de desarrollo web con tecnologías como HTML, CSS, JavaScript y nociones
    básicas de bases de datos.`,
    objetivo: `Brindar a los estudiantes sus primeros conocimientos en el mundo del desarrollo web, fomentando
    habilidades prácticas desde un nivel inicial. Además, buscamos prepararlos para su futura formación
    universitaria en carreras vinculadas a sistemas y tecnologías de la información.`
  };
  galeria = [
    { imagen: 'assets/img/lab1.jpg', descripcion: 'Estudiantes en práctica' },
    { imagen: 'assets/img/lab2.jpg', descripcion: 'Charlas de programación' },
    { imagen: 'assets/img/lab3.jpg', descripcion: 'Instalación de redes' },
    { imagen: 'assets/img/lab4.jpg', descripcion: 'Trabajo en equipo' }
  ];
}

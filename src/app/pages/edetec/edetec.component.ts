import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edetec',
  standalone: true,
  templateUrl: './edetec.component.html',
  styleUrls: ['./edetec.component.css'],
  imports: [CommonModule]
})
export class EdetecComponent {
  lab = {
    nombre: 'EDETEC',
    descripcion: 'Laboratorio de Energía y Desarrollo Tecnológico',
    logo: 'assets/logos/logo-edetec.jpg',
    supervisores: [
      'Felipe Simonetti'
    ],
    colaboradores: [
      'Francisco Navarro',
      'Bruno Benítez'
    ],
    queHacemos: `   Nos especializamos en el desarrollo de rampas tecnológicas que promuevan la accesibilidad y
       la inclusión de personas con discapacidad (PcD), brindando soluciones concretas para facilitar 
       su participación en diferentes ámbitos. `,
    objetivo: ` Crear y adaptar dispositivos tecnológicos como teclados y mouses especiales, juguetes accesibles,
       comunicadores pictográficos, interruptores de impacto, entre otros, respondiendo a las necesidades 
       específicas de cada persona o institución.`
  };
  galeria = [
    { imagen: 'assets/img/lab1.jpg', descripcion: 'Estudiantes en práctica' },
    { imagen: 'assets/img/lab2.jpg', descripcion: 'Charlas de programación' },
    { imagen: 'assets/img/lab3.jpg', descripcion: 'Instalación de redes' },
    { imagen: 'assets/img/lab4.jpg', descripcion: 'Trabajo en equipo' }
  ];
}

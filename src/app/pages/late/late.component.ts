import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-late',
  standalone: true,
  templateUrl: './late.component.html',
  styleUrls: ['./late.component.css'],
  imports: [CommonModule]
})
export class LateComponent {
  lab = {
    nombre: 'LATE',
    descripcion: 'Laboratorio de Automatización y Tecnologías Emergentes',
    logo: 'assets/logos/logo-late.jpg',
    supervisores: [
      'Luis Ferrufino'
    ],
    colaboradores: [
      'Agustín Nieto',
      'Martín Romero',
      'Daniel Alejandro Fernández',
      'Valentín Diego González'
    ],
    queHacemos: `  LATE es un espacio de extensión dedicado a brindar asistencia técnica a establecimientos de 
      educación especial. Aquí se reacondicionan computadoras, notebooks, monitores y periféricos
      donados por la comunidad.`,
    objetivo: `  Reacondicionar equipamiento informático para ser entregado a escuelas de educación especial,
       organismos, instituciones y personas que lo necesiten, promoviendo la inclusión digital y el 
       acceso a la tecnología.`
  };
  galeria = [
    { imagen: 'assets/img/lab1.jpg', descripcion: 'Estudiantes en práctica' },
    { imagen: 'assets/img/lab2.jpg', descripcion: 'Charlas de programación' },
    { imagen: 'assets/img/lab3.jpg', descripcion: 'Instalación de redes' },
    { imagen: 'assets/img/lab4.jpg', descripcion: 'Trabajo en equipo' }
  ];
}

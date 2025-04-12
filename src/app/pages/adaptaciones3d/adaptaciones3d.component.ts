import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adaptaciones3d',
  standalone: true,
  templateUrl: './adaptaciones3d.component.html',
  styleUrls: ['./adaptaciones3d.component.css'],
  imports: [CommonModule]
})
export class Adaptaciones3dComponent {
  lab = {
    nombre: 'Adaptaciones Inclusivas en 3D',
    descripcion: 'Diseño y fabricación de soluciones accesibles mediante impresión 3D',
    logo: 'assets/logos/logo-tecnicas3d.jpg',
    supervisores: [
      'Francisco Bustos'
    ],
    colaboradores: [
      'Luciano Macías',
      'Gustavo Mamani',
      'Víctor Palomar',
      'Tomás Naranjo'
    ],
    queHacemos: ` Este espacio de extensión está dedicado al diseño y fabricación de soluciones accesibles utilizando
      impresión 3D. Se realizan piezas de repuesto para impresoras, adaptaciones como switches accesibles
      y otros dispositivos solicitados por distintos laboratorios. `,
    objetivo: ` Brindar soporte técnico y creativo mediante tecnologías de fabricación digital, promoviendo la
      inclusión y respondiendo a las necesidades de otros espacios de extensión a través del desarrollo
      de piezas personalizadas impresas en 3D.`
  };
  galeria = [
    { imagen: 'assets/img/lab1.jpg', descripcion: 'Estudiantes en práctica' },
    { imagen: 'assets/img/lab2.jpg', descripcion: 'Charlas de programación' },
    { imagen: 'assets/img/lab3.jpg', descripcion: 'Instalación de redes' },
    { imagen: 'assets/img/lab4.jpg', descripcion: 'Trabajo en equipo' }
  ];
}

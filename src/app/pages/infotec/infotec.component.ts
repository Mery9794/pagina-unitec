import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectoresComponent } from "../../noticias/sectores/sectores.component";

@Component({
  selector: 'app-infotec',
  standalone: true,
  templateUrl: './infotec.component.html',
  styleUrls: ['./infotec.component.css'],
  imports: [CommonModule, SectoresComponent]
})
export class InfotecComponent {
  lab = {
    nombre: 'INFOTEC',
    descripcion: 'Espacio de desarrollo de aplicaciones para PcD y WebPage de UNITEC',
    logo: 'assets/logos/logo-infotec.jpg',
    supervisores: [
      'Manuel Teves',
      'María Solange Catañeda Pariona'
    ],
    colaboradores: [],

    queHacemos: `INFOTEC es un espacio de extensión de UNiTEC dedicado a la investigación, desarrollo e implementación
    de soluciones tecnológicas en el ámbito del software, redes y sistemas inteligentes. Está orientado
    principalmente a la enseñanza de desarrollo web con tecnologías como HTML, CSS, JavaScript y nociones
    básicas de bases de datos.`,
    objetivo: `Brindar a los estudiantes sus primeros conocimientos en el mundo del desarrollo web, fomentando
    habilidades prácticas desde un nivel inicial. Además, buscamos prepararlos para su futura formación
    universitaria en carreras vinculadas a sistemas y tecnologías de la información.`
  };

  galeriaInfoTec = [
    { imagen: 'assets/img/infotec/img1.jpg', descripcion: 'Espacio donde se diseña y programan soluciones' },
    { imagen: 'assets/img/infotec/img2.jpg', descripcion: 'La mascota del laboratorio 🐶' }
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

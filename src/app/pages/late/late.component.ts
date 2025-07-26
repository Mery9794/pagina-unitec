import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectoresComponent } from "../../noticias/sectores/sectores.component";

@Component({
  selector: 'app-late',
  standalone: true,
  templateUrl: './late.component.html',
  styleUrls: ['./late.component.css'],
  imports: [CommonModule, SectoresComponent]
})
export class LateComponent {
  lab = {
    nombre: 'LATE',
    descripcion: 'Laboratorio de Asistencia Técnica a Establecimientos de Educación Especial',
    logo: 'assets/logos/logo-late.jpg',
    supervisores: [
      'Luis Ferrufino'
    ],
    colaboradores: [
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

  galeriaLate = [
    { imagen: 'assets/img/late/late1.jpg', descripcion: 'Espacio de trabajo' },
    { imagen: 'assets/img/late/late2.jpg', descripcion: 'Computadora arreglada y reacondicionada, lista para entregar ' }
  ];
 
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

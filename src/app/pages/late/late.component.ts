import { Component, OnInit } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'; // <-- el genérico

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };

@Component({
  selector: 'app-late',
  standalone: true,
  templateUrl: './late.component.html',
  imports: [LabsComponent]
})
export class LateComponent implements OnInit {
  lab = {
    nombre: 'LATE',
    descripcion: 'Laboratorio de Asistencia Técnica a Establecimientos de Educación Especial',
    logo: 'assets/logos/logo-late1.png',
    supervisores: ['Luis Ferrufino'],
    colaboradores: ['Daniel Alejandro Fernández', 'Valentín Diego González'],
    queHacemos: `LATE es un espacio de extensión dedicado a brindar asistencia técnica a establecimientos de 
      educación especial. Aquí se reacondicionan computadoras, notebooks, monitores y periféricos
      donados por la comunidad.`,
    objetivo: `Reacondicionar equipamiento informático para ser entregado a escuelas de educación especial,
       organismos, instituciones y personas que lo necesiten, promoviendo la inclusión digital y el 
       acceso a la tecnología.`,
    sector: 'late'
  };

  galeria = [
    { imagen: 'assets/img/late/late1.jpg', descripcion: 'Espacio de trabajo' },
    { imagen: 'assets/img/late/late2.jpg', descripcion: 'Computadora reacondicionada lista para entregar' }
  ];

  proyectos: Proyecto[] = []; // ahora el nombre coincide con el genérico


  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { Component, OnInit } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'; // <-- el genérico

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };


@Component({
  selector: 'app-edetec',
  standalone: true,
  templateUrl: './edetec.component.html',
  imports: [LabsComponent]
})
export class EdetecComponent implements OnInit {

  lab = {
    nombre: 'EDETEC',
    descripcion: 'Espacio de Desarrollos Tecnológicos',
    logo: 'assets/logos/logo-edetec1.png',
    supervisores: [
      'Felipe Simonetti'
    ],
    colaboradores: [
      'Bruno Benítez'
    ],
    queHacemos: `   Nos especializamos en el desarrollo de rampas tecnológicas que promuevan la accesibilidad y
       la inclusión de personas con discapacidad (PcD), brindando soluciones concretas para facilitar 
       su participación en diferentes ámbitos. `,
    objetivo: ` Crear y adaptar dispositivos tecnológicos como teclados y mouses, juguetes,
       comunicadores pictográficos, interruptores de impacto; entre otros, respondiendo a las necesidades 
       específicas o patologia de cada persona o institución.`,
    sector: 'edetec'
  };

  galeria = [
    { imagen: 'assets/img/edetec/edetec1.jpg', descripcion: 'Mesa de trabajo' },
    { imagen: 'assets/img/edetec/edetec2.jpg', descripcion: 'Herramientas y prototipos' }
  ];

  proyectos: Proyecto[] = [];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

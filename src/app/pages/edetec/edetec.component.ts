import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectoresComponent } from "../../noticias/sectores/sectores.component";

@Component({
  selector: 'app-edetec',
  standalone: true,
  templateUrl: './edetec.component.html',
  styleUrls: ['./edetec.component.css'],
  imports: [CommonModule, SectoresComponent]
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
  galeriaEdetec = [
    { imagen: 'assets/img/', descripcion: '' },
    { imagen: 'assets/img/', descripcion: '' },
    { imagen: 'assets/img/', descripcion: '' }
  ];
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

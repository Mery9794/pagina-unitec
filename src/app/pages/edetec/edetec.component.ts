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
    descripcion: 'Espacio de Desarrollos Tecnológicos',
    logo: 'assets/logos/logo-edetec.jpg',
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
       específicas o patologia de cada persona o institución.`
  };

  galeriaEdetec = [
    { imagen: 'assets/img/edetec/edetec1.jpg', descripcion: 'Mesa de trabajo' },
    { imagen: 'assets/img/edetec/edetec2.jpg', descripcion: 'Herramientas y prototipos' }
  ];
  proyectosEdetec= [
    
  ];
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

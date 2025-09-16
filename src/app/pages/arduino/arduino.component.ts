import { Component, OnInit } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'; // <-- el genérico

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };

@Component({
  selector: 'app-arduino',
  standalone: true,
  templateUrl: './arduino.component.html',
  imports: [LabsComponent]
})

export class ArduinoComponent implements OnInit {

  lab = {
    nombre: 'Arduino',
    descripcion: 'Espacio de desarrollo de adaptaciones con el microcontrolador Arduino',
    logo: 'assets/logos/logo-arduino1.png',
    supervisores: [
      'Diego Cervantes Flores'
    ],
    colaboradores: [

    ],
    queHacemos: `  En este espacio de extensión se desarrollan dispositivos tecnológicos accesibles mediante el uso del
     microcontrolador Arduino, orientados a mejorar la calidad de vida de personas con discapacidad (PcD). `,
    objetivo: ` Investigar, diseñar y desarrollar rampas tecnológicas accesibles utilizando Arduino, con el fin de promover la 
    inclusión y participación activa de PcD en distintos contextos sociales, educativos y cotidianos.`,
    sector: 'arduino'
  };

  galeria = [
  ];

  proyectos: Proyecto[] = [];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

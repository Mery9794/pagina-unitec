import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectoresComponent } from "../../noticias/sectores/sectores.component";

@Component({
  selector: 'app-arduino',
  standalone: true,
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css'],
  imports: [CommonModule, SectoresComponent]
})

export class ArduinoComponent {
  lab = {
    nombre: 'Arduino',
    descripcion: 'Espacio de desarrollo de adaptaciones con la herramienta Arduino',
    logo: 'assets/logos/logo-arduino.jpg',
    supervisores: [
      'Diego Cervantes Flores'
    ],
    colaboradores: [

    ],
    queHacemos: `  En este espacio de extensión se desarrollan dispositivos tecnológicos accesibles mediante el uso del
     microcontrolador Arduino, orientados a mejorar la calidad de vida de personas con discapacidad (PcD). `,
    objetivo: ` Investigar, diseñar y desarrollar rampas tecnológicas accesibles utilizando Arduino, con el fin de promover la 
    inclusión y participación activa de PcD en distintos contextos sociales, educativos y cotidianos.`
  };
  galeriaArduino = [
    { imagen: 'assets/img/', descripcion: '' }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

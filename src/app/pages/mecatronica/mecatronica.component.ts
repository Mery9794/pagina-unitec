import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mecatronica',
  standalone: true,
  templateUrl: './mecatronica.component.html',
  styleUrls: ['./mecatronica.component.css'],
  imports: [CommonModule]
})
export class MecatronicaComponent {
  lab = {
    nombre: 'MECATRÓNICA',
    descripcion: 'Laboratorio de Integración de Sistemas Mecánicos y Electrónicos',
    logo: 'assets/logos/logo-mecatronica.jpg',
    supervisores: [
      'Ing. Marcelo Fernández Busse',
      'Lic. José Alberto Ferreyra'
    ],
    colaboradores: [
      'Juan Marcos Malanga',
      'Simón López',
      'Valentín Atanasof'
    ],
    queHacemos: ` Este espacio de extensión se dedica a la investigación y desarrollo de tecnologías 
    aplicadas a la inclusión, con foco en la integración de sistemas mecánicos, electrónicos e informáticos. 
    Se trabaja especialmente con domótica y electromedicina, orientadas a personas con discapacidad. `,
    objetivo: ` Investigar y aplicar las Tecnologías de la Información y la Comunicación (TIC) en soluciones 
    relacionadas con la discapacidad, mediante el diseño y desarrollo de sistemas de domótica, dispositivos 
    de electromedicina y otras herramientas tecnológicas.`
  };
  galeria = [
    { imagen: 'assets/img/foto1Mecatronica.jpeg', descripcion: 'Cortina instalada' },
    { imagen: 'assets/img/foto3Mecatronica.jpeg', descripcion: 'La mascota del laboratorio "Meca"' },
    { imagen: 'assets/img/videoMecatronica.mp4', descripcion: 'Cortina funcionando' }
  ];
  
  visorAbierto = false;
  visorIndice = 0;
  
  esVideo(url: string): boolean {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  }
  
  abrirVisor(indice: number): void {
    this.visorIndice = indice;
    this.visorAbierto = true;
  }
  
  cerrarVisor(): void {
    this.visorAbierto = false;
  }
  
  anterior(event: Event): void {
    event.stopPropagation();
    this.visorIndice = (this.visorIndice - 1 + this.galeria.length) % this.galeria.length;
  }
  
  siguiente(event: Event): void {
    event.stopPropagation();
    this.visorIndice = (this.visorIndice + 1) % this.galeria.length;
  }
  
}

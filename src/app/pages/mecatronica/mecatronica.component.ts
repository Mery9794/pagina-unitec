import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectoresComponent } from "../../noticias/sectores/sectores.component";

@Component({
  selector: 'app-mecatronica',
  standalone: true,
  templateUrl: './mecatronica.component.html',
  styleUrls: ['./mecatronica.component.css'],
  imports: [CommonModule, SectoresComponent]
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
  galeriaMecatronica = [
    { imagen: 'assets/img/foto1Mecatronica.jpeg', descripcion: 'Cortina instalada' },
    { imagen: 'assets/img/foto3Mecatronica.jpeg', descripcion: 'La mascota del laboratorio "Meca"' },
    { imagen: 'assets/img/videoMecatronica.mp4', descripcion: 'Cortina funcionando' }
  ];
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}  
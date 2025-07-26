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
    descripcion: 'Espacio de desarrollo de aplicaciones para la Domótica y Electromedicina',
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
    queHacemos: ` Este espacio de extensión se dedica a la investigación y desarrollo de tecnologías aplicadas a
     la inclusión, con foco en la integración de sistemas mecánicos, electrónicos e informáticos. Se trabaja especialmente 
     con proyectos de domótica y electromedicina, orientados a mejorar la calidad de vida de personas con discapacidad (PcD).`,
    objetivo: ` Investigar y aplicar las Tecnologías de la Información y la Comunicación (TIC) en el ámbito de la discapacidad,
     mediante el diseño y desarrollo de sistemas domóticos, dispositivos de electromedicina y otras herramientas tecnológicas 
     que favorezcan la autonomía y accesibilidad.`,
  };

  galeriaMecatronica = [
    { imagen: 'assets/img/mecatronica/foto1Mecatronica.jpeg', descripcion: 'Cortina instalada' },
    { imagen: 'assets/img/mecatronica/foto3Mecatronica.jpeg', descripcion: 'La mascota del laboratorio "Meca"' },
    { imagen: 'assets/img/mecatronica/videoMecatronica.mp4', descripcion: 'Cortina funcionando' }
  ];
 
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}  
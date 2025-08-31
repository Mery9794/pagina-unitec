import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectoresComponent } from '../../noticias/sectores/sectores.component';

type Proyecto = {
  id: string | number;
  nombre: string;
  descripcion: string;
  imagen?: string;
};

@Component({
  selector: 'app-mecatronica',
  standalone: true,
  templateUrl: './mecatronica.component.html',
  styleUrls: ['./mecatronica.component.css'],
  imports: [CommonModule, RouterModule, SectoresComponent]
})
export class MecatronicaComponent implements OnInit {
  lab = {
    nombre: 'MECATRÓNICA',
    descripcion: 'Espacio de desarrollo de aplicaciones para la Domótica y Electromedicina',
    logo: 'assets/logos/logo-mecatronica1.png',
    supervisores: ['Ing. Marcelo Fernández Busse', 'Lic. José Alberto Ferreyra'],
    colaboradores: ['Juan Marcos Malanga', 'Simón López', 'Valentín Atanasof'],
    queHacemos: `Este espacio de extensión se dedica a la investigación y desarrollo de tecnologías aplicadas a
      la inclusión, con foco en la integración de sistemas mecánicos, electrónicos e informáticos. Se trabaja especialmente 
      con proyectos de domótica y electromedicina, orientados a mejorar la calidad de vida de personas con discapacidad (PcD).`,
    objetivo: `Investigar y aplicar las Tecnologías de la Información y la Comunicación (TIC) en el ámbito de la discapacidad,
      mediante el diseño y desarrollo de sistemas domóticos, dispositivos de electromedicina y otras herramientas tecnológicas 
      que favorezcan la autonomía y accesibilidad.`
  };

  galeriaMecatronica = [
    { imagen: 'assets/img/mecatronica/foto1Mecatronica.jpeg', descripcion: 'Cortina instalada' },
    { imagen: 'assets/img/mecatronica/foto3Mecatronica.jpeg', descripcion: 'La mascota del laboratorio "Meca"' },
    { imagen: 'assets/img/mecatronica/videoMecatronica.mp4', descripcion: 'Cortina funcionando' }
  ];

  proyectosMecatronica: Proyecto[] = [
    { id: 1, nombre: 'Electromedicina', descripcion: 'Proyecto que nació ante la necesidad de dar respuesta en situaciones de emergía sanitaria como la vivida durante la pandemia de COVID 2020. Esta herramienta, destinada a los profesionales de la salud, permite monitorear y registrar, de forma remota, los signos vitales de pacientes aislados mediante sensores y almacenando los datos en la nube para ser accedidos en tiempo real, permitiendo obtener un diagnóstico preciso, rápido y eficiente de la situación de emergencia y de los pacientes en particular,  sin temor a un posible contagio.', imagen: 'assets/proyectos/electromedicina.jpg' },
    { id: 2, nombre: 'Casa Adaptada', descripcion: 'Nuestra visión de Casa Adaptada se centra en el concepto de un ecosistema donde conviven un conjunto de sistemas, técnicas, diseños y herramientas tecnológicas interconectadas entre sí, que posibilita la adecuación del entorno físico, en lo accesible y funcional, de una persona con discapacidad, de acuerdo a sus requerimientos, permitiéndole desenvolverse de manera autónoma sin la necesidad de la asistencia de otras personas.', imagen: 'assets/proyectos/casa-adaptada.jpg' },
    { id: 3, nombre: 'Adaptación de Terminales', descripcion: 'Articulando sus tareas con LATE, el espacio de trabajo e investigación LabTIC se encarga de adecuar y adaptar equipos informáticos, mediante la instalación de programas informáticos especializados. Estos pueden ser herramientas de accesibilidad tales como lectores de pantallas, teclados virtuales, sistemas aumentativos y alternativos de comunicación, emuladores de mouse, entre otros;  o de apoyo en la intervención de personas con discapacidad intelectual, cognitiva, sensorial o motora.', imagen: 'assets/proyectos/terminales.png' }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

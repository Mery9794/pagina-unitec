import { Component, OnInit } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'; // <-- el genérico

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };

@Component({
  selector: 'app-mecatronica',
  standalone: true,
  templateUrl: './mecatronica.component.html',
  imports: [LabsComponent]
})
export class MecatronicaComponent implements OnInit {
  lab = {
    nombre: 'MECATRÓNICA',
    descripcion: 'Espacio de desarrollo de aplicaciones para la Domótica y Biomedicina',
    logo: 'assets/logos/logo-mecatronica1.png',
    queHacemos: `Este espacio de extensión se dedica a la investigación y desarrollo de tecnologías aplicadas a
      la inclusión, con foco en la integración de sistemas mecánicos, electrónicos e informáticos. Se trabaja especialmente 
      con proyectos de domótica y biomedicina, orientados a mejorar la calidad de vida de personas con discapacidad (PcD).`,
    objetivo: `Investigar y aplicar las Tecnologías de la Información y la Comunicación (TIC) en el ámbito de la discapacidad,
      mediante el diseño y desarrollo de sistemas domóticos, dispositivos de biomedicina y otras herramientas tecnológicas 
      que favorezcan la autonomía y accesibilidad.`,
    sector: 'mecatronica'
  };

  galeria = [
    { imagen: 'assets/img/mecatronica/foto1Mecatronica.jpeg', descripcion: 'Cortina instalada' },
    { imagen: 'assets/img/mecatronica/foto3Mecatronica.jpeg', descripcion: 'La mascota del laboratorio "Meca"' },
    { imagen: 'assets/img/mecatronica/videoMecatronica.mp4', descripcion: 'Cortina funcionando' }
  ];

  proyectos: Proyecto[] = [
    { id: 1, nombre: 'Biomedicina', descripcion: 'Proyecto que nació ante la necesidad de dar respuesta en situaciones de emergías sanitarias como la vivida durante la pandemia de COVID 2020. Esta herramienta, destinada a los profesionales de la salud, permite monitorear y registrar, de forma remota, los signos vitales de pacientes mediante sensores, almacenando los datos en la nube para ser accedidos en tiempo real, permitiendo obtener un diagnóstico preciso, rápido y eficiente de la situación de emergencia y de los pacientes en particular,  sin temor a un posible contagio.', imagen: 'assets/proyectos/electromedicina.jpg' },
    { id: 2, nombre: 'Casa Adaptada', descripcion: 'Nuestra visión de Casa Adaptada se centra en el concepto de un ecosistema donde conviven un conjunto de sistemas, técnicas, diseños y herramientas tecnológicas interconectadas entre sí, que posibilita la adecuación del entorno físico, en lo accesible y funcional, de una persona con discapacidad, de acuerdo a sus requerimientos, permitiéndole desenvolverse de manera autónoma sin la necesidad de la asistencia de otras personas.', imagen: 'assets/proyectos/casa-adaptada.jpg' },
    ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

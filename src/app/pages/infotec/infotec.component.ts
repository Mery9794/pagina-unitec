import { Component, OnInit } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'; // <-- el genérico

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };

@Component({
  selector: 'app-infotec',
  standalone: true,
  templateUrl: './infotec.component.html',
  imports: [LabsComponent]
})
export class InfotecComponent implements OnInit {

  lab = {
    nombre: 'INFOTEC',
    descripcion: 'Espacio de desarrollo de aplicaciones para PcD y WebPage de UNITEC',
    logo: 'assets/logos/logo-infotec1.png',
    supervisores: [
      'Manuel Teves',
      'María Solange Catañeda Pariona'
    ],
    colaboradores: [],

    queHacemos: `INFOTEC es un espacio de extensión de UNiTEC dedicado a la investigación, desarrollo e implementación
    de soluciones tecnológicas en el ámbito del software, redes y sistemas inteligentes. Está orientado
    principalmente al uso de tecnologías como HTML, CSS, JavaScript y nociones
    básicas de bases de datos.`,
    objetivo: `Analizar aplicaciones existentes para PcD, desarrollar aplicaciones propias e investigar para su instalacion sofware asistivo para ser instalado en las PC adaptadas que se entregan`,
    sector: 'infotec'
  };

  galeria = [
    { imagen: 'assets/img/infotec/img1.jpg', descripcion: 'Espacio donde se diseña y programan soluciones' },
    { imagen: 'assets/img/infotec/img2.jpg', descripcion: 'La mascota del laboratorio 🐶' }
  ];

  proyectos: Proyecto[] = [
    { id: 1, nombre: 'Sistema de Asistencia Virtual', descripcion: 'El sistema de asistencia virtual es parte fundamental del proyecto de Casa Adaptada. Se trata de un conjunto de módulos y herramientas tecnológicas agrupadas en una aplicación que tiene como finalidad interactuar con el usuario y, de acuerdo a sus peticiones enviar la solicitud correspondiente al sistema domótico, el cual interactúa con los elementos que controla (luces, cortinas, puertas, electrodomésticos, etc.) A su vez, el sistema de asistencia virtual, se encarga de monitorear automáticamente los signos vitales del usuario y registrar sus movimientos y, ante una situación de emergencia, actuar automáticamente dependiendo del caso. A si mismo se ocupa de administrar el sistema de energía eléctrica auxiliar y el sistema de vigilancia de la vivienda.', imagen: 'assets/proyectos/Asistencia.jpg' },
    { id: 2, nombre: 'Realidad Aumentada', descripcion: 'La realidad aumentada (RA) es una tecnología que superpone elementos digitales dentro del mundo real, enriqueciendo la percepción del entorno físico a través de dispositivos como smartphones, tablets o gafas de RA. En lugar de reemplazar la realidad, la RA la complementa con información adicional, imágenes, videos o modelos 3D superpuestos.Esta tecnología tiene un gran impacto en personas con discapacidad, en lo que respecta a su uso, y un alto potencial en el ámbito de la inclusión y la accesibilidad.En la actualidad, en InfoTEC estamos desarrollando sistemas basados en RA con el fin de utilizarlos, dentro del área de la discapacidad sensorial, intelectual y cognitiva, en diferentes entornos y situaciones concretas, tanto recreativas como educativas y laborales.', imagen: 'assets/proyectos/realidad-aumentada.jpg' },
    { id: 3, nombre: 'Laboratorio de Accesibilidad Web', descripcion: 'Iniciativa que comprende el estudio y puesta en práctica de diferentes principios, recomendaciones y estándares relacionados con el Diseño Universal, la Interfaz de Usuario "user-friendly"  y la Accesibilidad Web, y cuyo objetivo es el de llevar a cabo tareas de investigación, docencia y transferencia a terceros.', imagen: 'assets/proyectos/accesibilidadWeb.jpg' }
  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

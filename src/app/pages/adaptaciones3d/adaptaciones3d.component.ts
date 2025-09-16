import { Component, OnInit } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'; // <-- el genérico

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };

@Component({
  selector: 'app-adaptaciones3d',
  standalone: true,
  templateUrl: './adaptaciones3d.component.html',
  imports: [LabsComponent]
})
export class Adaptaciones3dComponent implements OnInit {

  lab = {
    nombre: 'Técnicas 3D',
    descripcion: 'Espacio de diseño e impresión en 3D',
    logo: 'assets/logos/logo-tecnicas3d1.png',
    supervisores: [
      'Francisco Bustos'
    ],
    colaboradores: [

    ],
    queHacemos: `  Este espacio de extensión está dedicado al diseño y fabricación de soluciones accesibles utilizando
      impresión 3D. Se realizan piezas de repuesto para impresoras, adaptaciones como switches accesibles
      y otros dispositivos solicitados por los otros espacios de extensión. `,
    objetivo: ` Brindar soporte técnico y creativo mediante tecnologías de fabricación digital, promover la inclusión respondiendo a las necesidades de otros espacios de extensión, desarrollar piezas personalizadas impresas en 3D.`,
    sector: 'tecnica3d'
  };

  galeria = [
    { imagen: 'assets/img/3d/foto1Adap3D.jpg', descripcion: 'Espacio de diseño y fabricación' },
    { imagen: 'assets/img/3d/foto2Adap3D.jpg', descripcion: 'Impresora 3D' }
  ];

  proyectos: Proyecto[] = [];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectoresComponent } from '../../noticias/sectores/sectores.component';

@Component({
  selector: 'app-adaptaciones3d',
  standalone: true,
  templateUrl: './adaptaciones3d.component.html',
  styleUrls: ['./adaptaciones3d.component.css'],
  imports: [CommonModule, SectoresComponent]
})
export class Adaptaciones3dComponent {
  lab = {
    nombre: 'Técnicas 3D',
    descripcion: 'Espacio de diseño e impresión en 3D',
    logo: 'assets/logos/logo-tecnicas3d.png', 
    supervisores: ['Francisco Bustos'],
    colaboradores: [],
    queHacemos: `Este espacio de extensión está dedicado al diseño y fabricación de soluciones accesibles utilizando
      impresión 3D. Se realizan piezas de repuesto para impresoras, adaptaciones como switches accesibles
      y otros dispositivos solicitados por los otros espacios de extensión.`,
    objetivo: [
      `Brindar soporte técnico y creativo mediante tecnologías de fabricación digital.`,
      `Promover la inclusión respondiendo a las necesidades de otros espacios de extensión.`,
      `Desarrollar piezas personalizadas impresas en 3D.`
    ]
  };

  galeriaAdaptaciones3d = [
    { imagen: 'assets/img/3d/foto1Adap3D.jpg', descripcion: 'Espacio de diseño y fabricación' },
    { imagen: 'assets/img/3d/foto2Adap3D.jpg', descripcion: 'Impresora 3D' }
  ];
  proyectosAdaptaciones3d = [

  ];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

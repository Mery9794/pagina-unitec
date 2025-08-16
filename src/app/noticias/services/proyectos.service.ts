import { Injectable } from '@angular/core';

export interface Proyecto {
  id: string;                   
  nombre: string;                
  descripcionLarga?: string;     
  sector: string;               
  icono?: string;              
  imagen: string;              
  fotos?: { imagen: string; descripcion: string }[]; 
}

@Injectable({ providedIn: 'root' })
export class ProyectosService {

  private proyectos: Proyecto[] = [
    {
      id: '1',
      nombre: 'Electromedicina',
      descripcionLarga: 'Este proyecto..',
      sector: 'mecatronica',
      icono: 'fas fa-heartbeat',
      imagen: 'assets/proyectos/electromedicina.jpg',
      fotos: [
        { imagen: 'assets/proyectos/electromedicina1.jpg', descripcion: 'Equipo en desarrollo' },
        { imagen: 'assets/proyectos/electromedicina2.jpg', descripcion: 'Pruebas de funcionamiento' }
      ]
    },
    {
      id: '2',
      nombre: 'Casa Aumentada',
      sector: 'mecatronica',
      icono: 'fas fa-vr-cardboard',
      imagen: 'assets/proyectos/realidad-aumentada.jpg'
    },
    {
      id: '3',
      nombre: 'Adaptación de Terminales',
      sector: 'mecatronica',
      icono: 'fas fa-laptop-code',
      imagen: 'assets/proyectos/proyecto-x.jpg'
    }
  ];

  getProyectosPorSector(sector: string): Proyecto[] {
    return this.proyectos.filter(p => p.sector === sector);
  }

  getProyectoById(id: string): Proyecto | undefined {
    return this.proyectos.find(p => p.id.toString() === id);
  }

}

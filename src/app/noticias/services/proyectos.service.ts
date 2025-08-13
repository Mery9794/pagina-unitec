import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProyectosService {
  private proyectos = [
    { 
      id: '1',
      nombre: '',
      descripcion: 'Automatización de cortinas y luces...',
      descripcionLarga: 'Este sistema permite controlar...',
      icono: 'fas fa-cogs',
      fotos: [
        
      ]
    },
  ];

  getProyectos() {
    return this.proyectos;
  }

  getProyectoById(id: string) {
    return this.proyectos.find(p => p.id === id);
  }
}

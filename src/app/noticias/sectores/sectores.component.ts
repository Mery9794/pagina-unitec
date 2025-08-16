import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };

@Component({
  selector: 'app-sectores',
  standalone: true,
  templateUrl: './sectores.component.html',
  styleUrls: ['./sectores.component.css'],
  imports: [CommonModule, RouterModule]
})
export class SectoresComponent {
  @Input() galeria: { imagen: string; descripcion: string }[] = [];
  @Input() proyectos: Proyecto[] = [];

  visorAbierto = false;
  visorIndice = 0;

  esVideo(url: string): boolean {
    return /\.mp4$|\.webm$|\.ogg$/i.test(url);
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

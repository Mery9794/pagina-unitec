import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectores',
  standalone: true,
  templateUrl: './sectores.component.html',
  styleUrl: './sectores.component.css',
  imports: [CommonModule]
})
export class SectoresComponent {
  @Input() galeria: { imagen: string, descripcion: string }[] = [];

  visorAbierto = false;
  visorIndice = 0;

  esVideo(url: string): boolean {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
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

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Proyecto = { id: string | number; nombre: string; descripcion: string; imagen?: string; };
type LabInfo = { nombre: string; descripcion: string; logo: string; queHacemos: string; objetivo: string; sector: string; };
type GalleryItem = { src: string; alt?: string };

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './labs.component.html',
  styleUrls: ['../labs.css'] // CSS compartido
})
export class LabsComponent {
  @Input({ required: true }) lab!: LabInfo;
  @Input() proyectos: Proyecto[] = [];
  @Input() galeria: { imagen: string; descripcion: string }[] = [];

  pageSize = 3;
  flatItems: GalleryItem[] = [];
  pages: GalleryItem[][] = [];
  pageIdx = 0;

  visorAbierto = false;
  visorIndiceGlobal = 0;

  ngOnChanges(): void {

    const raw = (this.galeria ?? []).map(g => ({ src: g.imagen, alt: g.descripcion }));

    const seen = new Set<string>();
    this.flatItems = [];
    for (const it of raw) {
      if (!it?.src || seen.has(it.src)) continue;
      seen.add(it.src);
      this.flatItems.push(it);
    }
    this.pages = this.chunk(this.flatItems, this.pageSize);
    this.pageIdx = 0;
  }

  private chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  get canPrev(): boolean { return this.pageIdx > 0; }
  get canNext(): boolean { return this.pageIdx < this.pages.length - 1; }
  prevGrupo() { if (this.canPrev) this.pageIdx--; }
  nextGrupo() { if (this.canNext) this.pageIdx++; }

  esVideo(u?: string) { return !!u && /\.mp4$|\.webm$|\.ogg$/i.test(u); }

  abrirVisor(indexEnPagina: number) {
    this.visorIndiceGlobal = this.pageIdx * this.pageSize + indexEnPagina;
    this.visorAbierto = true;
  }
  cerrarVisor() { this.visorAbierto = false; }
  anterior() { if (this.visorIndiceGlobal > 0) this.visorIndiceGlobal--; }
  siguiente() { if (this.visorIndiceGlobal < this.flatItems.length - 1) this.visorIndiceGlobal++; }
} 
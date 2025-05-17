import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia } from '../../../models/noticia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia-detalle.component.html',
  styleUrl: './noticia-detalle.component.css'
})
export class NoticiaDetalleComponent implements OnInit {
  noticia?: Noticia;
  fotoActual: number = 0;
  todasLasFotos: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.noticia = this.noticiasService.getNoticiaById(id);

      if (this.noticia) {
        this.todasLasFotos = [];

        if (this.noticia.imagenUrl) {
          this.todasLasFotos.push(this.noticia.imagenUrl);
        }

        if (this.noticia.fotos?.length) {
          this.todasLasFotos.push(...this.noticia.fotos);
        }
      }
    }
  }

  anterior() {
    this.fotoActual = (this.fotoActual - 1 + this.todasLasFotos.length) % this.todasLasFotos.length;
  }

  siguiente() {
    this.fotoActual = (this.fotoActual + 1) % this.todasLasFotos.length;
  }
}

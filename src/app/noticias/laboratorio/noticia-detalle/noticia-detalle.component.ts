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
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const noticiaEncontrada = this.noticiasService.getNoticiaById(id);
      if (noticiaEncontrada) {
        this.noticia = noticiaEncontrada;
        this.todasLasFotos = noticiaEncontrada.fotos ?? [];
      } else {
        // Manejo si no se encuentra la noticia
        this.todasLasFotos = [];
      }
    } else {
      // Manejo si no hay id en la ruta
      this.todasLasFotos = [];
    }
  }

  siguiente() {
    this.fotoActual = (this.fotoActual + 1) % this.todasLasFotos.length;
  }

  anterior() {
    this.fotoActual = (this.fotoActual - 1 + this.todasLasFotos.length) % this.todasLasFotos.length;
  }
}






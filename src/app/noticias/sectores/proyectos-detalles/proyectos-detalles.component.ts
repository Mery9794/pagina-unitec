import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos-detalles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos-detalles.component.html',
  styleUrls: ['./proyectos-detalles.component.css']
})
export class ProyectosDetallesComponent implements OnInit {
  proyecto?: Proyecto;
  fotoActual: number = 0;
  todasLasFotos: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private proyectosService: ProyectosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const encontrado = this.proyectosService.getProyectoById(id);
      if (encontrado) {
        this.proyecto = encontrado;
        this.todasLasFotos = encontrado.fotos?.map(f => f.imagen) ?? [];
      }
    }
  }

  siguiente() {
    this.fotoActual = (this.fotoActual + 1) % this.todasLasFotos.length;
  }

  anterior() {
    this.fotoActual = (this.fotoActual - 1 + this.todasLasFotos.length) % this.todasLasFotos.length;
  }
}

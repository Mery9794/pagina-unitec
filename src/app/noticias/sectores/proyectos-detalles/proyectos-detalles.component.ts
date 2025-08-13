import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../services/proyectos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyectos-detalles',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule    
  ],
  templateUrl: './proyectos-detalles.component.html',
  styleUrl: './proyectos-detalles.component.css'
})
export class ProyectosDetallesComponent implements OnInit {
  proyecto: any;
  todasLasFotos: string[] = [];
  fotoActual = 0;

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectosService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? ''; 
    this.proyecto = this.proyectoService.getProyectoById(id);

    if (this.proyecto?.fotos) {
      this.todasLasFotos = this.proyecto.fotos;
    }
  }

  anterior() {
    this.fotoActual = (this.fotoActual - 1 + this.todasLasFotos.length) % this.todasLasFotos.length;
  }

  siguiente() {
    this.fotoActual = (this.fotoActual + 1) % this.todasLasFotos.length;
  }
}

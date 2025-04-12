import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-laboratorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {
  noticias: Noticia[] = [];

  ngOnInit(): void {
    // Datos simulados
    this.noticias = [
      {
        id: '1',
        titulo: ' ',
        resumen: ' ',
        contenido: ' ',
        fecha: new Date('2024-03-15'),
        imagenUrl: ' '
      },
      {
        id: '2',
        titulo: ' ',
        resumen: ' ',
        contenido: ' ',
        fecha: new Date('2024-06-20'),
        imagenUrl: ' '
      }
    ];
  }
}

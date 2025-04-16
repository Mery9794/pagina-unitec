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
  noticias: (Noticia & { mostrarContenido?: boolean })[] = [];

  ngOnInit(): void {
    this.noticias = [
      {
        id: '1',
        titulo: 'Entrega de PC',
        resumen: 'El Sábado 8/7 entregamos una PC adaptada a ...',
        fecha: new Date('2023-07-08'),
        imagenUrl: 'assets/news/noticia1.jpg',
        linkFacebook: 'https://www.facebook.com/',
      },
      {
        id: '2',
        titulo: 'Visita de la EET N° 2 de Berisso',
        resumen: 'Hoy recibimos a los alumnos de la EET N° 2 de Berisso ...',
        fecha: new Date('2022-05-17'),
        imagenUrl: 'assets/news/noticia2.jpg',
        linkFacebook: 'https://www.facebook.com/',
      }
    ];
  }    

  toggleContenido(noticia: any) {
    noticia.mostrarContenido = !noticia.mostrarContenido;
  }
}

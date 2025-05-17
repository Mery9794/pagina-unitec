import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service'; 
import { Noticia } from '../../models/noticia';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-laboratorio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticias = this.noticiasService
      .getNoticias()
      .sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.component.html', 
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  currentSlide = 0;

  slides = [
    {
      imagen: 'assets/img/banner.jpg',
      titulo: ' ',
      descripcion: ' '
    },
    {
      imagen: 'assets/img/progresar.jpg',
       ruta: '/progresar'
    },
    {
      imagen: 'assets/img/belgrano.jpg', 
      ruta: '/belgrano'
    },
     {
      imagen: 'assets/img/maqueta3d.png', 
      ruta: '/casa-3d'
    }
  ];

  siguienteSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  anteriorSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}


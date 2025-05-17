import { Injectable } from '@angular/core';
import { Noticia } from '../../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticias: Noticia[] = [
    {
      id: '1',
      titulo: 'Inicio de Prácticas Formativas con la EET N.º 2 de Berisso',
      resumen: 'Dimos la bienvenida a los alumnos de la EET N.º 2 de Berisso, quienes realizarán sus Prácticas Formativas en el espacio de extensión UNITEC LabTIC.',
      contenido: 'En el marco de las Prácticas Formativas Obligatorias 2022, recibimos a los estudiantes de la Tecnicatura en Informática de la Escuela de Educación Técnica N.º 2 de Berisso. Durante el año, desarrollarán sus prácticas en el espacio de extensión UNITEC LabTIC, donde podrán aplicar y ampliar sus conocimientos en proyectos tecnológicos. ¡Les damos la bienvenida y les deseamos una excelente experiencia!',
      fecha: new Date('2022-05-17T12:00:00'), // A las 12 del mediodía (local)
      imagenUrl: 'assets/news/noticia2.jpg'
    },
    {
      id: '2',
      titulo: 'Entrega de PC Adaptada en la Biblioteca de Quilmes Oeste',
      resumen: 'Se entregó una computadora adaptada a la Biblioteca P. Goyena, en una acción conjunta con el Rotary Club de Ezpeleta.',
      contenido: 'El sábado 8 de julio entregamos una computadora adaptada a la Biblioteca Popular Goyena, ubicada en Quilmes Oeste. Esta iniciativa se llevó a cabo con el apoyo del Rotary Club de Ezpeleta y busca fomentar el acceso a la tecnología para todos los sectores de la comunidad. Seguimos comprometidos con el desarrollo inclusivo a través de la innovación.',
      fecha: new Date('2023-07-08T12:00:00'), // A las 12 del mediodía (local)
      imagenUrl: 'assets/news/noticia1.jpg'
    },
    {
      id: '3',
      titulo: 'Presentación del Bastón Inteligente, Jornadas ITEE',
      resumen: 'Participamos en las VIII Jornadas ITEE con la presentación del Bastón Inteligente para personas con discapacidad visual.',
      contenido: 'El jueves 8 de mayo participamos de las VIII Jornadas ITEE, donde presentamos el "Bastón Inteligente para personas ciegas", un proyecto desarrollado en colaboración con el Sector Arduino. Las piezas del dispositivo fueron impresas con tecnologías 3D, lo que permitió diseñar un case ergonómico y funcional. Agradecemos a todas las áreas involucradas por su valioso aporte.',
      fecha: new Date('2025-05-08T12:00:00'), // A las 12 del mediodía (local)
      imagenUrl: 'assets/news/noticia3.jpeg',
      fotos: ['assets/news/noticia3.jpeg', 'assets/news/noticia4.jpeg'],
    }
    
  ];

  getNoticias() {
    return this.noticias;
  }

  getNoticiaById(id: string) {
    return this.noticias.find(n => n.id === id);
  }
  
}
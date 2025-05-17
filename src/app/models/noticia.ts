export interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  contenido?: string;
  fecha: Date;
  imagenUrl: string;
  fotos?: string[];
  linkFacebook?: string;
}
export interface Noticia {
  id: string;
  titulo: string;
  resumen: string;
  contenido?: string; // opcional
  fecha: Date;
  imagenUrl: string;
  linkFacebook: string;
}

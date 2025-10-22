import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Paso { titulo: string; texto: string; imagen?: string; extraFotos?: ExtraFoto[]; }
interface BloqueTiposItem { label: string; texto: string; }
interface BloqueTipos { titulo: string; descripcion: string; items: BloqueTiposItem[]; imagen?: string; }
interface BloqueSoftwareAA {
  intro: string; intro2: string; asistivo: string; adaptativo: string; lista: string[]; glosario?: string;
}
interface Proyecto {
  id: string; nombre: string; sector: string;
  introParrafos?: string[];
  tipos?: BloqueTipos;
  pasosTitulo?: string; pasosDescripcion?: string; pasos?: Paso[];
  softwareAA?: BloqueSoftwareAA;
}
type GalleryItem = { src: string; alt?: string };
type ExtraFoto = string | { src: string; texto?: string };

@Component({
  selector: 'app-proyecto-terminales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css'] // podés reutilizar tu CSS de detalles
})

export class TerminalesProyectoComponent implements OnInit {

  proyecto: Proyecto = {
    id: '3',
    nombre: 'Adaptación de Terminales',
    sector: 'mecatronica',
 
    introParrafos: [
      'Hoy en día, la sociedad se enfrenta a desafíos cada vez más significativos, muchos de los cuales pueden ser abordados mediante el uso de las nuevas herramientas como son las Tecnologías de La Información y la Comunicación (TIC). Estas, facilitan las tareas diarias de las personas desde lo laboral hasta lo doméstico. Pasando por el entretenimiento, cuestiones administrativas, educación, salud y comunicación, entre otras.',
      'Las universidades, como parte del entretejido social, no son ajenas a esta realidad. En este sentido, desde el espacio de UNITEC venimos desarrollando diferentes proyectos vinculados a la incorporación de las tecnologías en aquellos sectores más vulnerables de la comunidad.',
      'En lo que respecta a la discapacidad, mediante el Programa de extensión UNITEC-LATE, desde LabTIC hacemos uso de distintos tipos de software asistivo y adaptativo  dentro de las áreas de la educación, la estimulación, la rehabilitación y la autonomía de las personas con algún tipo de discapacidad asociada.'
    ],

    tipos: {
      titulo: 'Tipos de Discapacidades',
      descripcion:
        'La OMS clasifica la discapacidad en cuatro grupos: física, sensorial, intelectual y psicosocial. Estos grupos se basan en la función corporal afectada y reconocen que la discapacidad no solo depende de la condición de salud, sino también de factores sociales y ambientales.',
      items: [
        { label: 'Discapacidad Física', texto: 'limitaciones en la movilidad, la coordinación o el control del cuerpo, ya sea congénita o adquirida.' },
        { label: 'Discapacidad Sensorial', texto: 'visuales (ceguera o baja visión), auditivas (sordera o pérdida auditiva parcial) y del lenguaje.' },
        { label: 'Discapacidad Intelectual', texto: 'limitación en el aprendizaje, la comunicación y la autonomía, afectando la capacidad de adquirir habilidades diarias y responder a diversas situaciones.' },
        { label: 'Discapacidad Psicosocial', texto: 'trastornos mentales o emocionales, como la depresión, la esquizofrenia o el trastorno bipolar.' }
      ],
      imagen: 'assets/proyectos/A.Terminales/tipos-OMS.png'
    },

    pasosTitulo: 'La Dinámica de Trabajo LATE–LabTIC',
    pasosDescripcion:
      'Los espacios LATE y LabTIC desarrollan tareas conjuntas de manera coordinada para alcanzar objetivos en común. Dicha labor se lleva a cabo siguiendo una serie de pasos basados en un protocolo preestablecido. Estos son:',
    pasos: [
      {
        titulo: '1. Recepción de Equipamiento',
        texto: 'Los equipos informáticos (CPU, monitores, periféricos) donados por particulares, instituciones privadas u organismos gubernamentales son recepcionados por el personal de UNITEC y trasferidos al sector de LATE para su clasificación y posterior revisión.',
        imagen: 'assets/proyectos/A.Terminales/paso1.jpeg'
      },
      {
        titulo: '2. Desarme y Revisión de Componentes',
        texto: 'En esta etapa se procede a desmontar los equipos y revisar cada uno de sus componentes (fuente, placa madre, memoria RAM, discos de almacenamiento, placa de video, periféricos, etc.), separando los que funcionan de aquello que necesitan ser reparados o desechados. Los componentes que no pueden ser reparados se desguazan y se guardan sus partes.',
        imagen: 'assets/proyectos/A.Terminales/paso2.jpeg'
      },
      {
        titulo: '3. Reacondicionamiento de Terminales',
        texto: 'Al recibir una solicitud, se procede al armado del equipo. Esta tarea incluye en ensamble de los componentes de hardware, instalación del sistema operativo y del software necesario para su correcto funcionamiento.',
        imagen: 'assets/proyectos/A.Terminales/paso3.jpeg',
        extraFotos: [
          { src: 'assets/proyectos/A.Terminales/paso3-extra1.jpeg', texto: 'Equipo de terminales adaptadas para entregar (Espacio LATE)' },
        ]
      },
      {
        titulo: '4. Instalación de Software Asistivo y Adaptativo',
        texto: 'Finalizada la etapa de reacondicionamiento, la terminal (CPU + periféricos) es remitida al LabTIC. Allí se procede a la instalación del software asistivo y adaptativo correspondiente de acuerdo a los requerimientos solicitados. En esta etapa se realiza un chequeo completo del equipo (tanto de hardware como de software). Finalmente la terminal es devuelta al LATE con un informe detallado de su estado.',
        imagen: 'assets/proyectos/A.Terminales/paso4.jpeg'
      },
      {
        titulo: '5. Control de Calidad y Entrega',
        texto: 'Como último paso se realiza un control de calidad completo del funcionamiento de la terminal (CPU + periféricos + software) y si todo está correcto, queda lista para su entrega en comodato. El control de calidad incluye el seguimiento del equipo informático luego de ser entregado. Esto permite detectar posibles fallas en su funcionamiento como así también la posibilidad de contar con una retroalimentación respecto de las experiencias obtenidas a partir de uso por parte de los usuarios finales.',
        imagen: 'assets/proyectos/A.Terminales/paso5.jpeg',
        extraFotos: [
          { src: 'assets/proyectos/A.Terminales/paso5-extra1.jpeg', texto: 'Equipo informatico, usado por los usuarios' },
          { src: 'assets/proyectos/A.Terminales/paso5-extra2.jpeg', texto: 'Equipo informatico, usado por los usuarios' },
          { src: 'assets/proyectos/A.Terminales/paso5-extra3.jpeg', texto: 'Terminal instalada en el espacio de reabilitación - Hospital Ramos Mejias' },
        ]
      }
    ],

    softwareAA: {
      intro:
        'El término de Software Asistivo y Adaptativo hace referencia a todo aquel tipo de programa o aplicación informática que, de manera individual o combinada con otras tecnologías, permite llevar a cabo diversas tareas en la computadora o dispositivos móviles, de manera accesible y adecuada según los requerimientos del usuario.',
      intro2:
        'Si bien, en ciertas ocasiones la línea que separa estos dos tipos de software puede llegar a ser un tanto difusa o superponerse por compartir características similares, es posible hacer una distinción generalizada entre ambas. Aunque esta clasificación no es estricta ni excluyente una con la otra.',
      asistivo:
        'Software Asistivo es aquel programa o aplicación que permite al usuario interactuar con su entorno (chatbots, asistentes virtuales, sistemas domóticos, etc.) o aquellos que ayudan a la organización diaria, la gestión de rutinas, la anticipación de acciones, la autorregulación de emociones, entre otras actividades. También hace referencia a aquellas herramientas informáticas enfocadas al entrenamiento de situaciones y lugares, el estímulo motriz, sensorial o cognitivo, etc. que sirven de apoyo en las labores de los profesionales vinculados al área de la estimulación y la rehabilitación (fonoaudiólogos, terapistas ocupacionales, asistentes terapéuticos, etc.) en personas con discapacidad.',
      adaptativo:
        'Software Adaptativo es aquel que adecua la computadora o dispositivo móvil para que este pueda ser utilizado como una herramienta que ayude a compensar alguna deficiencia (por lo general visual o comunicación) o eliminar barreras digitales. En nuestro espacio contamos con un amplio catálogo con diferentes tipos de software asistivo y adaptativo, como así también de recursos digitales agrupados de acuerdo a su funcionalidad. Estos son:',
      lista: [
        'Magnificadores de pantallas',
        'Lectores de pantallas',
        'Motores TTS (síntesis de voz)',
        'Teclados virtuales',
        'Reconocedores de voz',
        'SAAC (comunicación aumentativa/alternativa)',
        'Emuladores de mouse y escáneres de pantalla',
        'Software para discapacidad auditiva y de lenguaje',
        'Software de estimulación y rehabilitación',
        'Recursos digitales (imágenes / audios / videos / pictogramas)'
      ]
    }
  };

  pageSize = 3;
  flatItems: GalleryItem[] = [];
  pages: GalleryItem[][] = [];
  pageIdx = 0;

  visorAbierto = false;
  visorIndiceGlobal = 0;

  private chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const extras = (this.proyecto.pasos ?? []).flatMap((p, idxPaso) => {
      const base = p.titulo?.trim() || `Paso ${idxPaso + 1}`;
      return (p.extraFotos ?? []).map((ef, idxFoto) => {
        if (typeof ef === 'string') {
          return { src: ef, alt: `${base} — extra ${idxFoto + 1}` } as GalleryItem;
        } else {
          return { src: ef.src, alt: ef.texto || `${base} — extra ${idxFoto + 1}` } as GalleryItem;
        }
      });
    });

    // quitar duplicados por src
    const seen = new Set<string>();
    this.flatItems = [];
    for (const it of extras) {
      if (!it.src || seen.has(it.src)) continue;
      seen.add(it.src);
      this.flatItems.push(it);
    }

    this.pages = this.chunk(this.flatItems, this.pageSize);
    this.pageIdx = 0;
  }

  get canPrev(): boolean { return this.pageIdx > 0; }
  get canNext(): boolean { return this.pageIdx < this.pages.length - 1; }
  prevGrupo() { if (this.canPrev) this.pageIdx--; }
  nextGrupo() { if (this.canNext) this.pageIdx++; }

  abrirVisor(indexEnPagina: number) {
    this.visorIndiceGlobal = this.pageIdx * this.pageSize + indexEnPagina;
    this.visorAbierto = true;
  }
  cerrarVisor() { this.visorAbierto = false; }
  anterior() { if (this.visorIndiceGlobal > 0) this.visorIndiceGlobal--; }
  siguiente() { if (this.visorIndiceGlobal < this.flatItems.length - 1) this.visorIndiceGlobal++; }
}
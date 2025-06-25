import { Injectable } from '@angular/core';
import { ProjectEntity } from '../entity/project.entity';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor() { }

  private listProjects: ProjectEntity[] = [
    {
      name: "Juego de Bingo en linea",
      description: "La aplicación permite autenticación de los usuarios, manejo de roles, pasarela de pagos, creación de eventos, comprar tabla de bingo para jugar en un evento en tiempo real.",
      platforms: ["Web"],
      company: "Lio",
      image: [],
      technologies: [
        "TypeScript",
        "NestJs",
        "Angular",
        "Docker compose",
        "Websocket",
        "Redis",
        "Stripe",
      ],
      linkDemo: "",
      linkGit: [],
      updatedAt: "24/06/2025",
      status: 'IN-PROGRESS',
    },
    {
      name: "Gestión de campañas y donaciones de sangre",
      description: "La aplicación permite autenticación con roles, gestión de usuarios, campañas, donantes y un sistema de notificaciones centralizado para mantener todo bajo control.",
      platforms: ["Web", "Mobile"],
      company: "Junta Provincial de El Oro de la ciudad de Machala",
      image: [
        'blood/01.webp',
        'blood/02.webp',
        'blood/03.webp',
        'blood/04.jpg',
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "Node.Js",
        "Express",
        "Angular",
        "Ionic",
        "Firebase",
        "Google Maps API",
      ],
      linkDemo: "",
      linkGit: [
      ],
      updatedAt: "01/10/2024",
      status: 'COMPLETED',
    },
    {
      name: "Apuntes con Glish Note",
      description: "Mejora tu inglés con Glish Note ofrece login y registro seguros, contenido de gramática básica, un traductor de Google integrado, 400 verbos esenciales para aprender y gestión de notas y vocabulario para un aprendizaje personalizado y eficiente.",
      platforms: ["Mobile"],
      company: "",
      image: [
        'glish_note/01.jpg',
        'glish_note/02.jpg',
        'glish_note/03.jpg'
      ],
      technologies: [
        "Dart",
        "Flutter",
        "Firebase: Authentication, Realtime database",
      ],
      linkDemo: "",
      linkGit: [
        { name: "Proyecto", link: "https://github.com/Lio10jr/glish_note_app" }
      ],
      updatedAt: "16/10/2024",
      status: 'COMPLETED',
    },
    {
      name: "Gestión de campeonato de fútbol",
      description: "Permite autenticación con roles, gestión integral del campeonato, vista pública adaptable a web y móvil, administración de equipos, jugadores y más, además de alertas automáticas por correo electrónico.",
      platforms: ["Web", "Mobile"],
      company: "Universidad Tecnica de Machala",
      image: [
        'campeonato-utmach/01.png',
        'campeonato-utmach/02.png',
        'campeonato-utmach/03.png',
        'campeonato-utmach/04.png',
        'campeonato-utmach/05.png',
      ],
      technologies: [
        "Php",
        "TypeScript",
        "Laravel",
        "Jwt",
        "PostgreSQL",
        "Angular",
        "Ionic",
      ],
      linkDemo: "",
      linkGit: [
        { name: "Api", link: "https://github.com/Lio10jr/juegostic_api" },
        { name: "Web", link: "https://github.com/Lio10jr/juegos-ti-frontend" },
        { name: "Móvil", link: "https://github.com/Lio10jr/juegostic_mv" }
      ],
      updatedAt: "01/10/2024",
      status: 'COMPLETED',
    },
    {
      name: "Gestión de de viajes para buses",
      description: "Ofrece gestión completa de buses, choferes, tripulantes y viajes, con generación de reportes detallados para un control operativo preciso y eficiente.",
      platforms: ["Web"],
      company: "",
      image: [
        'compania-buses/01.png',
        'compania-buses/02.png',
        'compania-buses/03.png',
        'compania-buses/04.png',
        'compania-buses/05.png',
      ],
      technologies: [
        "TypeScript",
        "Angular",
        "Html5",
        "CSS3",
      ],
      linkDemo: "",
      linkGit: [
        { name: "", link: "https://github.com/Lio10jr/Compania-de-Buses" }
      ],
      updatedAt: "01/10/2024",
      status: 'COMPLETED',
    },
    {
      name: "Sistema de control de pacientes",
      description: "Incluye autenticación con roles, gestión de pacientes y recetas médicas, generación automatizada de recetas y reportes profesionales mediante Crystal Reports para un control clínico efectivo.",
      platforms: ["Windows"],
      company: "",
      image: [
        'control-pacientes/01.jpg'
      ],
      technologies: [
        "C#",
        ".NET Framework",
        "SQL Server",
        "WPF"
      ],
      linkDemo: "",
      linkGit: [
        { name: "", link: "https://github.com/Lio10jr/PatientControl" }
      ],
      updatedAt: "01/10/2024",
      status: 'COMPLETED',
    },
    {
      name: "Sistema para recicladoras orgánicas",
      description: "Ofrece autenticación con roles, gestión de reciclaje y contenedores, ventas de productos reciclables, y acceso completo desde plataformas web y móviles para un control ágil y sostenible.",
      platforms: ["Web", "Mobile"],
      company: "",
      image: [],
      technologies: [
        "TypeScript",
        "Angular",
        "Ionic",
        "NodeJS",
        "Express",
        "Firebase",
      ],
      linkDemo: "",
      linkGit: [
        { name: "", link: "https://github.com/Lio10jr/Recicladora" }
      ],
      updatedAt: "01/10/2024",
      status: 'COMPLETED',
    },
    {
      name: "Calculadora de métodos numéricos",
      description: "Integra algoritmos de Bairstow, bisección, derivadas, falsa posición, regresión y series de Taylor, junto con gráficos funcionales para análisis numérico avanzado y visualización clara.",
      platforms: ["Graphical interface"],
      company: "",
      image: [],
      technologies: [
        "Java",
      ],
      linkDemo: "",
      linkGit: [
        { name: "", link: "https://github.com/Lio10jr/Metodos-Numericos-Calculator" }
      ],
      updatedAt: "01/10/2024",
      status: 'COMPLETED',
    }
  ];

  public get getProjects(): ProjectEntity[] {
    return this.listProjects;
  }
}


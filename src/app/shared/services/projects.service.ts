import { Injectable } from '@angular/core';
import { ProjectEntity } from '../entity/project.entity';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor() { }

  private listProjects: ProjectEntity[] = [
    {
      name: "Gestión de campañas y donaciones de sangre",
      description: [
        "Autenticación y Roles",
        "Gestión de usuarios",
        "Gestión de campañas",
        "Gestión de donantes",
        "Gestión de notificaciones",
      ],
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
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Mejora tu ingles con Glish Note",
      description: [
        "Login y registro",
        "Contenido gramático básico",
        "Traductor de google integrado",
        "400 verbos para aprender",
        "Gestión de notas y vocabulario",
      ],
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
        { name: "Proyecto", link: "" }
      ],
      priority: true,
      implemented: false,
      updatedAt: "16/10/2024",
    },
    {
      name: "Gestión de campeonato de fútbol",
      description: [
        "Autenticación y roles",
        "Gestion de campeonato",
        "Vista pública web y móvil",
        "Gestión de equipos, jugadores y más",
        "Alertas via correo electrónico",
      ],
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
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024"
    },
    {
      name: "Gestión de de viajes para buses",
      description: [
        "Gestión de buses",
        "Gestión de choferes",
        "Gestión de tripulantes",
        "Gestión de viajes",
        "Reportes de viajes"
      ],
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
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Sistema de control de pacientes",
      description: [
        "Autenticación y roles",
        "Gestión de recetas médicas",
        "Gestión de paciente",
        "Generación de recetas",
        "Reportes con Crystal Reports"
      ],
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
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Sistema para recicladoras orgánicas",
      description: [
        "Autenticación y roles de usuario",
        "Gestión de reciclaje",
        "Gestión de contenedores",
        "Ventas de productos reciclables",
        "Gestión web y móvil",
      ],
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
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024"
    },
    {
      name: "Calculadora de métodos numéricos",
      description: [
        "Algoritmos de Bairstow y bisección",
        "Algoritmos de derivadas y falsa posición.",
        "Algoritmos de regresión.",
        "Algoritmos de series de Taylor.",
        "Gráficos de funciones.",
      ],
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
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024"
    }
  ];

  public get getProjects(): ProjectEntity[] {
    return this.listProjects;
  }
}


import { Injectable } from '@angular/core';
import { ProjectEntity } from '../entity/project.entity';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  constructor() { }

  private listProjects: ProjectEntity[] = [
    {
      name: "Campaign Management and Blood Donation System",
      description: [
        "Authentication and authorization",
        "User management.",
        "Campaign management.",
        "Donor management.",
        "Notification management.",
        "Donation campaign view.",
      ],
      platforms: ["Web", "Mobile"],
      company: "Junta Provincial de El Oro de la ciudad de Machala",
      image: [],
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
      link: [],
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Glish Note",
      description: [
        "Authentication",
        "Basic grammar content.",
        "Integrated translator.",
        "List of 400 verbs.",
        "Personal notes management.",
        "Personal vocabulary management."
      ],
      platforms: ["Mobile"],
      company: "",
      image: [
        'glish_note/logo_large_background.webp',
        'glish_note/01.jpg',
        'glish_note/02.jpg',
        'glish_note/03.jpg'
      ],
      technologies: [
        "Dart",
        "Flutter",
        "Firebase: Authentication, Realtime database",
      ],
      link: [
        
      ],
      priority: true,
      implemented: false,
      updatedAt: "16/10/2024",
    },
    {
      name: "Football Championship Management System for UTMACH",
      description: [
        "Authentication and authorization",
        "Championship management",
        "Team management",
        "Participant management",
        "Standings management",
        "Public view (web and mobile).",
      ],
      platforms: ["Web", "Mobile"],
      company: "Universidad Tecnica de Machala",
      image: [],
      technologies: [
        "Php",
        "TypeScript",
        "Laravel",
        "Jwt",
        "PostgreSQL",
        "Angular",
        "Ionic",
      ],
      link: [
        "https://github.com/Lio10jr/juegostic_api",
        "https://github.com/Lio10jr/juegos-ti-frontend",
        "https://github.com/Lio10jr/juegostic_mv"
      ],
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024"
    },
    {
      name: "Bus Company",
      description: [
        "Driver management.",
        "Bus management.",
        "Crew management.",
        "Trip management.",
        "Report management."
      ],
      platforms: ["Web"],
      company: "",
      image: [],
      technologies: [
        "TypeScript",
        "Angular",
        "Html5",
        "CSS3",
      ],
      link: ["https://github.com/Lio10jr/Compania-de-Buses"],
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Patient Control",
      description: [
        "Authentication and user roles",
        "Medical records management",
        "Patient management",
        "Generate prescriptions",
        "Medication management",
        "Report generation"
      ],
      platforms: ["Windows"],
      company: "",
      image: [],
      technologies: [
        "C#",
        ".NET Framework",
        "SQL Server",
        "WPF"
      ],
      link: ["https://github.com/Lio10jr/PatientControl"],
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Recycling System",
      description: [
        "Login and registration",
        "Recycling management.",
        "Container management.",
        "User management.",
        "Deposit management.",
        "Product management.",
        "Sales management.",
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
      link: ["https://github.com/Lio10jr/Recicladora"],
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024"
    },
    {
      name: "Numerical Methods Calculator",
      description: [
        "Bairstow's algorithms",
        "Bisection algorithms.",
        "Derivative algorithms.",
        "False position algorithms.",
        "Regression algorithms.",
        "Taylor series algorithms.",
        "Function graphing.",
      ],
      platforms: ["Graphical interface"],
      company: "",
      image: [],
      technologies: [
        "Java",
      ],
      link: ["https://github.com/Lio10jr/Metodos-Numericos-Calculator"],
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024"
    }
  ];
  /* private listProjects: ProjectEntity[] = [
    {
      name: "Sistema de gestión de campañas y donación de sangre",
      description: [
        "Autenticación y autorización",
        "Gestión de usuarios.",
        "Gestión de campañas.",
        "Gestión de donantes.",
        "Gestión de notificaciones.",
        "Vista de campañas de donación.",
      ],
      platforms: [ "Web", "Móvil" ],
      company: "Junta Provincial de El Oro de la ciudad de Machala",
      image: [],
      technologies:[
        "TypeScript",
        "JavaScript",
        "Node.Js",
        "Express",
        "Angular",
        "Ionic",
        "Firebase",
        "Google Maps API",
      ],
      link: [],
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Glish Note",
      description: [
        "Autenticación",
        "Contenido básico de gramática.",
        "Traductor integrado.",
        "Lista de 400 verbos.",
        "Gestión de notas personales.",
        "Gestión de vocabulario personal."
      ],
      platforms: [ "Móvil" ],
      company: "",
      image: [],
      technologies: [
        "Dart",
        "Flutter",
        "Firebase: Authentication, Realtime database",
      ],
      link: [],
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Sistema de gestion de campeonato de fútbol para la UTMACH",
      description: [
        "Autenticación y autorización",
        "Gestión de campeonatos",
        "Gestión de equipos",
        "Gestión de participantes",
        "Gestión de tabla de posiciones",
        "Vista publica (web y móvil).",
      ],
      platforms: [ "Web", "Móvil" ],
      company: "Universidad Tecnica de Machala",
      image: [],
      technologies:[
        "Php",
        "TypeScript",
        "Laravel",
        "Jwt",
        "PostgreSQL",
        "Angular",
        "Ionic",
      ],
      link: [ 
        "https://github.com/Lio10jr/juegostic_api",
        "https://github.com/Lio10jr/juegos-ti-frontend",
        "https://github.com/Lio10jr/juegostic_mv"
      ],
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024"
    },
    {
      name: "Compañia de buses",
      description: [
        "Gestión Choferes.",
        "Gestión Buses.",
        "Gestión Tripulación.",
        "Gestión Viajes.",
        "Gestión Reportes."
      ],
      platforms: [ "Web" ],
      company: "",
      image: [],
      technologies:[
        "TypeScript",
        "Angular",
        "Html5",
        "CSS3",
      ],
      link: ["https://github.com/Lio10jr/Compania-de-Buses"],
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Control de Pacientes",
      description: [
        "Autenticación y roles de usuario",
        "Gestión de Fichas Medicas",
        "Gestión de Pacientes",
        "Generar Recetas",
        "Gestión de Medicamentos",
        "Generación de Reportes"
      ],
      platforms: [ "Windows" ],
      company: "",
      image: [],
      technologies: [
        "C#",
        ".NET Framework",
        "SQL Server",
        "WPF"
      ],
      link: ["https://github.com/Lio10jr/PatientControl"],
      priority: true,
      implemented: false,
      updatedAt: "01/10/2024",
    },
    {
      name: "Sistema para recicladora",
      description: [
        "Login y registro",
        "Gestión de Reciclaje.",
        "Gestión de Contenedores.",
        "Gestión de Usuarios.",
        "Gestión de Depositos.",
        "Gestión de Productos.",
        "Gestión de Ventas.",
      ],
      platforms: [ "Web", "Móvil" ],
      company: "",
      image: [],
      technologies:[
        "TypeScript",
        "Angular",
        "Ionic",
        "NodeJS",
        "Express",
        "Firebase",
      ],
      link: ["https://github.com/Lio10jr/Recicladora"],
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024"
    },
    {
      name: "Calculadora de métodos numéricos",
      description: [
        "Algoritmos de bairstown",
        "Algoritmos de bisección.",
        "Algoritmos de derivadas.",
        "Algoritmos de falsa posición.",
        "Algoritmos de Regresiónes.",
        "Algoritmos de serie de taylor.",
        "Graficación de funciones.",
      ],
      platforms: [ "Interfaz gráfica" ],
      company: "",
      image: [],
      technologies:[
        "Java",
      ],
      link: ["https://github.com/Lio10jr/Metodos-Numericos-Calculator"],
      priority: false,
      implemented: false,
      updatedAt: "01/10/2024"
    }
  ]; */

  public get getProjects(): ProjectEntity[] {
    return this.listProjects;
  }
}


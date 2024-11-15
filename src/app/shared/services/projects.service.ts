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
        { name: "Api", link: "https://github.com/Lio10jr/juegostic_api"},
        { name: "Web", link: "https://github.com/Lio10jr/juegos-ti-frontend"},
        { name: "Móvil", link: "https://github.com/Lio10jr/juegostic_mv"}
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
        { name: "", link: "https://github.com/Lio10jr/PatientControl"}
      ],
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
      linkDemo: "",
      linkGit: [
        { name: "", link: "https://github.com/Lio10jr/Recicladora"}
      ],
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
      linkDemo: "",
      linkGit: [
        { name: "", link: "https://github.com/Lio10jr/Metodos-Numericos-Calculator"}
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


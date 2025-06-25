
export interface ProjectEntity {
    name: string;
    description: string;
    platforms: string[];
    company: string;
    image: string[],
    technologies: string[];
    linkDemo: string
    linkGit: {name: string, link: string}[]
    updatedAt: string;
    status: 'COMPLETED' | 'IN-PROGRESS';
}
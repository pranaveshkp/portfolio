// types.ts

export type Project = {
    id: number;
    title: string;
    description: string;
    details?: string[];
    githubUrl?: string;
    image?: string;
    tags: string[];
};

export type Skill = {
    name: string;
    level: number; // percentage
};

export type SkillCategory = {
    name: string;
    skills: Skill[];
};

export type ProjectCategory = (
    "Full-Stack" |
    "Frontend" |
    "Backend" |
    "Logos" |
    "Motion Graphics"
);

export interface Project {
    title: string,
    subtitle: string,
    thumbnailUrl: string,
    featuredImage?: string,
    category: ProjectCategory
};

export interface DeveloperProject extends Project {
    description: string,
    github: string,
    deployed: boolean,
    url?: string,
    images: string[],
    technologies: string[]
};

export interface MotionGraphicsProject extends Project {
    videoUrl: string,
    twitchChannel: string
};
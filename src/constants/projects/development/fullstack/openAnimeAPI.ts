import type { DeveloperProject } from '@@types/Portfolio';

const OpenAnimeAPI: DeveloperProject = {
    title: "OpenAnimeAPI",
    subtitle: "A free API for general purpose Anime data needs",
    description: `
        I found that a lot of the existing API's didn't have the full amount of data I was looking for 
        or needed for other projects, so I decided to create an open source alternative with a focus on 
        community driven data.
        \n\n
        The goal for this project is to allow users to submit data requests, and validate existing data.
    `,
    thumbnailUrl: "https://i.imgur.com/6aaZL46.png",
    github: "https://github.com/OpenAnimeAPI/OpenAnimeAPI",
    deployed: false,
    images: [],
    technologies: [
        "TypeScript",
        "Express",
        "Bun",
        "SWC",
        "Jest",
        "TypeORM",
        "PostgreSQL",
        "Docker"
    ],
    category: "Full-Stack"
};

export default OpenAnimeAPI;
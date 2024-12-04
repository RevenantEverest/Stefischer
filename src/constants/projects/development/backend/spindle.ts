import type { DeveloperProject } from '@@types/Portfolio';

const Spindle: DeveloperProject = {
    title: "Spindle",
    subtitle: "A CLI Notion integration tool",
    description: `
        A CLI Notion integration tool.
        \n\n
        There are some limitations of Notion's database block in regards to summation of 
        related table column, so I created an integration that solves that to a degree!
    `,
    thumbnailUrl: "",
    github: "https://github.com/RevenantEverest/spindle",
    deployed: false,
    images: [],
    technologies: [
        "TypeScript",
        "Bun",
        "Commander"
    ],
    category: "Backend"
};

export default Spindle;
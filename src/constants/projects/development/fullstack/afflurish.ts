import type { DeveloperProject } from '@@types/Portfolio';

const Afflurish: DeveloperProject = {
    title: "Afflurish",
    subtitle: "A personal finance app",
    description: `
        A personal finance app. Create budgets, track spending, set bill reminders. Create with the
        intent to help friends and family adopt better financial habits.
    `,
    thumbnailUrl: "https://i.imgur.com/m2Dw97T.png",
    github: "https://github.com/Afflurish/Afflurish",
    deployed: false,
    images: [
        "https://i.imgur.com/XLnF5Tx.jpeg",
        "https://i.imgur.com/biCcKuh.jpeg",
        "https://i.imgur.com/8cMaVS8.jpeg"
    ],
    technologies: [
        "TypeScript",
        "TypeORM",
        "Next.js",
        "Redux",
        "PostgreSQL",
        "TypeORM",
        "Docker"
    ],
    category: "Full-Stack"
};

export default Afflurish;
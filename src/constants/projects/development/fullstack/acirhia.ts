import type { DeveloperProject } from '@@types/Portfolio';

const Acirhia: DeveloperProject = {
    title: "Acirhia",
    subtitle: "A browser based 2D RPG",
    description: `
        Acirhia is a 2D browser based RPG, which allows users to create characters, 
        fight monsters, buy/sell/pickup loot, complete quests and level up!
    `,
    thumbnailUrl: "https://i.imgur.com/E3rVqNq.png",
    featuredImage: "https://i.imgur.com/rywSrKe.png",
    github: "https://github.com/RevenantEverest/Acirhia",
    deployed: false,
    images: [
        "https://youtube.com/embed/hu8xkYxsZQ0"
    ],
    technologies: [
        "Java",
        "Spring",
        "Docker",
        "React.js",
        "PostgreSQL"
    ],
    category: "Full-Stack"
};

export default Acirhia;
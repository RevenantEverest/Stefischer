import type { DeveloperProject } from '@@types/Portfolio';

const LinearDiscord: DeveloperProject = {
    title: "Linear Discord",
    subtitle: "Get Linear Webhook data sent to your Discord server",
    description: `
        Linear doesn't have built in integrations for issue updates to Discord like it does for Slack. 
        This app bridges that gap and allows users to connect their Linear webhook and send it to a Discord server text channel of their choice.
    `,
    thumbnailUrl: `https://i.imgur.com/JEs8tFA.png`,
    github: "https://github.com/RevenantEverest/linear-discord",
    deployed: false,
    images: [
        "https://i.imgur.com/TwHhG3t.jpeg",
        "https://i.imgur.com/tjiMIsK.jpeg",
        "https://i.imgur.com/DIY59hc.jpeg"

    ],
    technologies: [
        "TypeScript",
        "Docker",
        "SWC",
        "Bun",
        "PostgreSQL",
        "TypeORM",
        "React",
        "Next.js",
        "Vite"
    ],
    category: "Full-Stack"
};

export default LinearDiscord;
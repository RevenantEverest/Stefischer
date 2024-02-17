import type { DeveloperProject } from '@@types/Portfolio';

const GW2EventCrawler: DeveloperProject = {
    title: "GW2 Event Tracker",
    subtitle: "A web scraper that parses Guild Wars 2 event timers into json",
    description: `
        A web scraper that parses the Guild Wars 2 wiki for event timer data, and outputs into json. This project was
        created to be used for a feature in FiresideBOT that allows users to subscribe to event notifications.
    `,
    thumbnailUrl: ``,
    github: "https://github.com/RevenantEverest/gw2_event_crawler/",
    deployed: false,
    images: [
        
    ],
    technologies: [
        "TypeScript",
        "Docker",
        "SWC",
        "Puppeteer",
        "Cronjobs",
        "Cheerio",
        "TypeORM",
        "PostgreSQL"
    ],
    category: "Backend"
};

export default GW2EventCrawler;
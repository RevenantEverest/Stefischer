import type { DeveloperProject } from '@@types/Portfolio';

const DungeonTracker: DeveloperProject = {
    title: "Dungeon Tracker",
    subtitle: "Track your D&D campaigns!",
    description: `
        Dungeon Tracker aims to simplify and organize any D&D campaign. Like most projects, 
        it was created out of necessity. One of my campaigns was struggling to 
        organize our campaign information, at first we were using Discord text channels but 
        that wasn't user friendly when it came to searching for specific information. While 
        not currently deployed, my campaign uses the development version for QA testing and 
        it has increased our time spent playing and decreased our time shuffling through computer 
        file trees/ text channels. So far it supports Sign Up/ Login, Campaign Creation, 
        Member Invites, Basic Role System, Inventory Management, Group Finances, and Personalized Notes.
    `,
    thumbnailUrl: "https://i.imgur.com/XNoauyk.png",
    featuredImage: "https://i.imgur.com/s8dWLSr.png",
    github: "https://github.com/RevenantEverest/DungeonTracker",
    deployed: false,
    images: [
        "https://i.imgur.com/65hT6CM.png",
        "https://i.imgur.com/IkUmpXM.png",
        "https://i.imgur.com/02sZoMm.png",
        "https://i.imgur.com/8BeEVsb.png",
        "https://i.imgur.com/JgiCsyc.png",
        "https://i.imgur.com/Ew8qtF2.png",
        "https://i.imgur.com/6ljWRv8.png"
    ],
    technologies: [
        "Node.js",
        "React.js",
        "Express.js",
        "PostgreSQL",
        "AWS"
    ],
    category: "Full-Stack"
};

export default DungeonTracker;
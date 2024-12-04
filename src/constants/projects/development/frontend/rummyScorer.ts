import type { DeveloperProject } from '@@types/Portfolio';

const RummyScorer: DeveloperProject = {
    title: "Rummy Scorer",
    subtitle: "A PWA tool to help keep track of Rummy 500 games",
    description: `
        After years of trying to find pen and paper for impromptu Rummy 500 games, I 
        decided to create a Progressive Web App to solve that issue. This app aims to help
        keep track of player scores as well as a quick access to the game's rules.
        \n\n
        My friends and family created new and fun rules to spice up Rummy 500 games and we call
        it "Dirty Rummy", which this app also houses the rules for and tracks elements associated with it. 
    `,
    thumbnailUrl: "https://i.imgur.com/WDuXs5c.png",
    github: "https://github.com/RevenantEverest/RummyScorer",
    deployed: true,
    url: "https://rummy.stefischer.com",
    images: [
        "https://i.imgur.com/yBOwbv1.jpeg",
        "https://i.imgur.com/bTuGVAq.jpeg",
        "https://i.imgur.com/Hriow5p.jpeg",
        "https://i.imgur.com/P3i7Fbc.jpeg"
    ],
    technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "AWS Amplify"
    ],
    category: "Frontend"
};

export default RummyScorer;
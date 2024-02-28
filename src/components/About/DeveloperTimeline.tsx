import type { TimelineDataPoint } from '@@types/Timeline';

import { Flex, Box } from 'reflexbox';
import { HiCalendar } from 'react-icons/hi';
import { Timeline } from '@@components/Common';

import ViewProjectButton from './ViewProjectButton';

function DeveloperTimeline() {

    const timeline: TimelineDataPoint[] = [
        {
            date: "January 2018",
            title: "Started at General Assembly",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL"
        },
        {
            date: "March 2018",
            title: "Started FiresideBOT",
            description: `
                Coming out of the WDI course, I wanted to start building out my portfolio. My first project was 
                FiresideBOT, a Discord bot. This project helped hone the skills I learned during the WDI course.
            `,
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "May 2018",
            title: "Started Cognizant Sponsored Course",
            description: `
                Began Software Engineer in Training (SET) course at General Assembly. This course was sponsored by 
                Fortune 500 company Cognizant. Here I learned about Java, Spring Boot, Docker and microservice architecture.
            `,
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "June 2018",
            title: "Created Acirhia",
            description: `
                A 2D browser based RPG, where you can fight, accept/complete quests, and buy/sell at shops. This 
                was made as a final project for the SET course.
            `,
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "November 2018",
            title: "Launched FiresideBOT",
            description: `
                Initially created to deepen my knowledge about full stack interactions, I decided to launch FiresideBOT to the public.
                During the first few weeks garnering over 40,000 users.
            `
        },
        {
            date: "March 2020",
            title: "Started DungeonTracker",
            description: `
                A full stack project with the aim of making D&D campaigns easier to track for both players and DM.
            `,
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "April 2020",
            title: "Created Archiver",
            description: `
                A Discord bot that migrates full historical text channel messages and pins to another text channel (even to another Discord server).
                This was created when my friend groups Discord server was being moved to another server, but we wanted to keep all the channels pins 
                and messages available to view. 
            `,
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "October 2020",
            title: "Created Phasmophobia Ghost Tool",
            description: "A website that displays information for the game Phasmophobia. I used this project to learn Redux, and more complex state management.",
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "May 2021",
            title: "Started WorkTimeManager",
            description: `
                A web client that tracks time spent on projects. Created to help create invoices while freelancing.
            `,
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "August 2021",
            title: "Started at Stackend Solutions LLC",
            description: `
                Began working at Stackend Solutions LLC as a Full Stack Developer. Here I help other startup 
                founders build their products from the ground up. It's here that I learned Python, Django, and React Native.
            `
        },
        {
            date: "March 2022",
            title: "Began rewriting FiresideBOT",
            description: `
                Due to a change Discord planned on implementing, the codebase for Fireside needed to be rewritten.
            `
        },
        {
            date: "March 2023",
            title: "Create GW2 Event Tracker",
            description: `
                After needing event information for GW2 and not being able to find a good API, I created this web 
                scraper to scrape the information from the GW2 Wiki.
            `,
            extraContent: () => <ViewProjectButton />
        },
    ];

    return(
        <Flex className="flex-col items-center justify-center gap-16">
            <Box className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
                    Developer Timeline
                </h1>
                <p className="font-semibold text-center mt-6 w-full md:w-3/6">
                    Here, you'll find a timeline highlighting the courses I've completed, projects I've worked on, and key 
                    career milestones. Dive into the moments that have influenced my skills and professional path.
                </p>
            </Box>
            <Box className="w-full md:w-5/6">
                <Timeline pointIcon={HiCalendar} data={timeline} />
            </Box>
        </Flex>
    );
};

export default DeveloperTimeline;
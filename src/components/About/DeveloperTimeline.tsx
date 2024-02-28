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
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL",
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "May 2018",
            title: "Started Cognizant Sponsored Course",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL",
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "June 2018",
            title: "Created Acirhia",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL",
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "November 2018",
            title: "Launched FiresideBOT",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL"
        },
        {
            date: "March 2020",
            title: "Started DungeonTracker",
            description: "",
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "April 2020",
            title: "Created Archiver",
            description: "A Discord bot that migrates entire text channel history to another text channel (even in another Discord server).",
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
            description: "A web client that tracks time spent on projects. Created to help create invoices while freelancing.",
            extraContent: () => <ViewProjectButton />
        },
        {
            date: "August 2021",
            title: "Started at Stackend Solutions LLC",
            description: "Began working at Stackend Solutions LLC as a Full Stack Developer. Here I help other startup founders build their products from the ground up."
        },
        {
            date: "March 2022",
            title: "Began rewriting FiresideBOT",
            description: "Due to a change Discord planned on implementing, the codebase for Fireside needed to be rewritten."
        },
        {
            date: "March 2023",
            title: "Create GW2 Event Tracker",
            description: "After needing event information for GW2 and not being able to find a good API, I created this web scraper to scrape the information from the GW2 Wiki.",
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
            <Box>
                <Timeline pointIcon={HiCalendar} data={timeline} />
            </Box>
        </Flex>
    );
};

export default DeveloperTimeline;
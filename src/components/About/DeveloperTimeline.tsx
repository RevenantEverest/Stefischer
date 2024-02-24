import { Flex } from 'reflexbox';
import { HiCalendar } from 'react-icons/hi';
import TimelineItem from '@@components/Common/Timeline/TimelineItem';

interface DeveloperTimeline {
    date: {
        month: string,
        year: number
    },
    title: string,
    description: string
};

function DeveloperTimeline() {

    const timeline: DeveloperTimeline[] = [
        {
            date: { month: "January", year: 2018 },
            title: "Started at General Assembly",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL"
        },
        {
            date: { month: "May", year: 2018 },
            title: "Started Cognizant Sponsored Course",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL"
        },
        {
            date: { month: "November", year: 2018 },
            title: "Launched FiresideBOT",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL"
        },
        {
            date: { month: "January", year: 2018 },
            title: "Started at General Assembly",
            description: "Began Web Development Immersive (WDI) course at General Assembly. Learned JavaScript, JQuery, Express, React, and PostgreSQL"
        }
    ];

    const renderTimeline = () => {
        const Items = timeline.map((point, index) => (
            <TimelineItem
                key={`developer-timeline-item-${index}`}
                icon={HiCalendar}
                date={`${point.date.month} ${point.date.year}`}
                title={point.title}
                description={point.description}
                renderSide={(index % 2 === 0) ? "left" : "right"}
            />
        ));

        return(
            <Flex className="flex-col items-center justify-center px-10">
                {Items}
            </Flex>
        );
    };

    return(
        <Flex className="items-center justify-center">
            {renderTimeline()}
        </Flex>
    );
};

export default DeveloperTimeline;
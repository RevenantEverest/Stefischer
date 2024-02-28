import type { IconType } from 'react-icons/lib';
import type { TimelineDataPoint, TimelineOrientation } from '@@types/Timeline';

import { Flex } from 'reflexbox';
import { HiCalendar } from 'react-icons/hi';

import TimelineItem from './TimelineItem';

import { useWindowDimensions } from '@@hooks';
import { BREAKPOINTS } from '@@constants';

export interface TimelineProps {
    pointIcon: IconType,
    data?: TimelineDataPoint[]
};

function Timeline({ pointIcon=HiCalendar, data=[] }: TimelineProps) {

    const dimensions = useWindowDimensions();

    const calculateOrientation = (index: number): TimelineOrientation  => {
        if(dimensions.width < BREAKPOINTS.MD) {
            return "right";
        }

        return index % 2 === 0 ? "right" : "left";
    };

    const renderTimeline = () => {
        const Items = data.map((point, index) => (
            <TimelineItem
                key={`timeline-item-${index}-${point.title}`}
                icon={pointIcon}
                point={point}
                orientation={calculateOrientation(index)}
            />
        ));

        return(
            <Flex className="flex-col items-start md:items-center justify-center px-0 md:px-8">
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

export default Timeline;
import type { IconType } from 'react-icons/lib';
import type { TimelineOrientation } from '@@types/Timeline';

import { Flex, Box } from 'reflexbox';

export interface TimelinePointProps {
    icon: IconType,
    orientation: TimelineOrientation,
    date: string
};

function TimelinePoint({ icon, orientation, date }: TimelinePointProps) {

    const IconComponent = icon;

    const orientationStyles = {
        dateContainer: (orientation === "right") ? "left-14" : "-left-[12.5rem]",
        dateParagraph: (orientation === "right") ? "text-left" : "text-right"
    };

    return(
        <Flex>
            <Box className="absolute">
                <div className={`relative top-3.5 w-[12rem] ${orientationStyles.dateContainer} `}>
                    <p className={`font-semibold text-sm ${orientationStyles.dateParagraph}`}>
                        {date}
                    </p>
                </div>
            </Box>
            <Box className="flex h-12 w-12 bg-card-light rounded-full items-center justify-center">
                <Box className="flex h-8 w-8 bg-gradient-to-tr from-primary to-secondary rounded-full items-center justify-center">
                    <IconComponent className="text-sm" />
                </Box>
            </Box>
        </Flex>
    );
};

export default TimelinePoint;
import type { TimelineDataPoint, TimelineOrientation } from '@@types/Timeline';

import { Flex, Box } from 'reflexbox';
import { Card } from '@@components/Common';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

import { useWindowDimensions } from '@@hooks';
import { BREAKPOINTS } from '@@constants';

export interface TimelineContentProps {
    point: TimelineDataPoint,
    orientation: TimelineOrientation
};

function TimelineContent({ point, orientation }: TimelineContentProps) {

    const dimensions = useWindowDimensions();

    const orientationStyles = {
        container: (orientation === "right") ? "left-[50%]" : "right-[50%]",
        flex: (orientation === "right") ? "border-l-2 pl-7" : "border-r-2 pr-7"
    };

    const commonIconStyles = "absolute text-6xl top-[15%] text-card";
    const CaretIcon = (orientation  === "right" ? FaCaretLeft : FaCaretRight);

    return(
        <div className={`relative ${(dimensions.width > BREAKPOINTS.MD) ? orientationStyles.container : "left-[8%]"}`}>
            <Flex 
                className={`
                    flex-col
                    gap-2
                    border-card-light 
                    ${orientationStyles.flex}
                `}
            >
                <Box className="py-8 relative">
                    <Card>
                        <p className="font-bold text-md md:text-lg text-secondary">
                            {point.title}
                        </p>
                        <p className="font-semibold text-sm md:text-md">{point.description}</p>
                        {point.extraContent && <point.extraContent />}
                    </Card>
                    <CaretIcon className={`${commonIconStyles} ${(orientation === "right" ? "-left-9" : "-right-9")}`} />
                </Box>
            </Flex>
        </div>
    );
};

export default TimelineContent;
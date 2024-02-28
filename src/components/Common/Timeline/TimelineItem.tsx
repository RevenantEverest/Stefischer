import type { IconType } from 'react-icons/lib';
import type { TimelineDataPoint, TimelineOrientation } from '@@types/Timeline';

import React from 'react';
import { Box } from 'reflexbox';
import { motion } from 'framer-motion';

import TimelinePoint from './TimelinePoint';
import TimelineContent from './TimelineContent';

interface TimelineItemProps {
    icon: IconType,
    point: TimelineDataPoint,
    orientation?: TimelineOrientation
};

function TimelineItem({ icon, point, orientation="right" }: TimelineItemProps) {

    return(
        <React.Fragment>
            <Box className="">
                <TimelinePoint icon={icon} date={point.date} orientation={orientation} />
            </Box>
            <Box className="w-11/12 md:w-3/6">
                <motion.div
                    whileHover={{
                        y: "-.5vh"
                    }}
                >
                    <TimelineContent point={point} orientation={orientation} />
                </motion.div>
            </Box>
        </React.Fragment>
    );
};

export default TimelineItem;
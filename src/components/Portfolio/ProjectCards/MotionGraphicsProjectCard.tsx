import type { MotionGraphicsProject } from '@@types/Portfolio';

import React, { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { Card, Button } from '@@components/Common';
import MotionGraphicsProjectModal from './Modals/MotionGraphicsProjectModal';

export interface MotionGraphicsProjectCardProps {
    project: MotionGraphicsProject
};

function MotionGraphicsProjectCard({ project }: MotionGraphicsProjectCardProps) {

    const [visible, setVisible] = useState<boolean>(false);

    return(
        <React.Fragment>
        <motion.div
            className="h-[28rem] hover:cursor-pointer"
            initial={{ y: 0 }}
            whileHover={{ y: "-2vh" }}
            onClick={() => setVisible(true)}
        >
            <Card>
                <Flex className="gap-5 flex-col items-center text-center">
                    <Box className="flex overflow-hidden">
                        <div className="h-60 w-[35rem]">   
                            <img className="w-full h-full object-cover rounded-3xl" src={project.thumbnailUrl} alt={project.title} />
                        </div>
                    </Box>
                    <Box>
                        <h1 className="text-3xl font-bold mb-2 text-text">{project.title}</h1>
                        <p className="font-semibold">{project.subtitle}</p>
                    </Box>
                    <Box>
                        <Button outlined color="secondary" size="sm" className="px-6">
                            <p className="font-bold">View Project</p>
                        </Button>
                    </Box>
                </Flex>
            </Card>
        </motion.div>
        <MotionGraphicsProjectModal
            project={project}
            visible={visible}
            setVisible={setVisible}
        />
        </React.Fragment>
    );
};

export default MotionGraphicsProjectCard;
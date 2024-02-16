import type { MotionGraphicsProject } from '@@types/Portfolio';

import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { Card } from '@@components/Common';

export interface MotionGraphicsProjectCardProps {
    project: MotionGraphicsProject
};

function MotionGraphicsProjectCard({ project }: MotionGraphicsProjectCardProps) {

    return(
        <motion.div
            className="h-[24rem] hover:cursor-pointer"
            initial={{ y: 0 }}
            whileHover={{ y: "-2vh" }}
        >
            <Card>
                <Flex className="gap-5 flex-col items-center text-center">
                    <Box className="flex h-60 w-96 overflow-hidden">   
                        <img className="w-full h-full object-cover rounded-3xl" src={project.thumbnailUrl} alt={project.title} />
                    </Box>
                    <Box>
                        <h1 className="text-3xl font-bold mb-2 text-text">{project.title}</h1>
                        <p className="font-semibold">{project.subtitle}</p>
                    </Box>
                </Flex>
            </Card>
        </motion.div>
    );
};

export default MotionGraphicsProjectCard;
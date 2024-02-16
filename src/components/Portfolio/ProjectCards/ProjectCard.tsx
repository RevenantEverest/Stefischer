import type { Project } from '@@types/Portfolio';

import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { Card } from '@@components/Common';

export interface ProjectCardProps {
    project: Project
};

function ProjectCard({ project }: ProjectCardProps) {

    return(
        <motion.div
            className="h-[30rem] hover:cursor-pointer"
            initial={{ y: 0 }}
            whileHover={{ y: "-2vh" }}
        >
            <Card>
                <Flex className="gap-5 flex-col items-center text-center">
                    <Box>
                        <img className="h-72 rounded-2xl" src={project.thumbnailUrl} alt={project.title} />
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

export default ProjectCard;
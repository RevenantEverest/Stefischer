import type { Project } from '@@types/Portfolio';

import React, { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import { motion } from 'motion/react';

import { Card } from '@@components/Common';
import ProjectModal from './Modals/ProjectModal';

export interface ProjectCardProps {
    project: Project
};

function ProjectCard({ project }: ProjectCardProps) {

    const [visible, setVisible] = useState<boolean>(false);

    return(
        <React.Fragment>
            <motion.div
                className="h-[30rem] hover:cursor-pointer"
                initial={{ y: 0 }}
                whileHover={{ y: "-2vh" }}
                onClick={() => setVisible(true)}
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
            <ProjectModal project={project} visible={visible} setVisible={setVisible} />
        </React.Fragment>
    );
};

export default ProjectCard;
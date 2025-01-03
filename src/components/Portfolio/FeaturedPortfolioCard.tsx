import type { Project, DeveloperProject, MotionGraphicsProject, AllProjects } from '@@types/Portfolio';

import React, { useState } from 'react';
import { Flex } from 'reflexbox';
import { motion } from 'motion/react';
import { Button } from '@@components/Common';

import ProjectModal from './ProjectCards/Modals/ProjectModal';
import MotionGraphicsProjectModal from './ProjectCards/Modals/MotionGraphicsProjectModal';
import DeveloperProjectModal from './ProjectCards/Modals/DeveloperProjectModal';

export interface FeaturedPortfolioCardProps {
    project: AllProjects
};

function FeaturedPortfolioCard({ project }: FeaturedPortfolioCardProps) {

    const [visible, setVisible] = useState<boolean>(false);

    const renderModal = () => {

        const commonProps = { visible, setVisible };

        switch(project.category) {
            case "Backend":
                return <DeveloperProjectModal project={project as DeveloperProject} {...commonProps} />
            case "Frontend":
                return <DeveloperProjectModal project={project as DeveloperProject} {...commonProps} />
            case "Full-Stack":
                return <DeveloperProjectModal project={project as DeveloperProject} {...commonProps} />
            case "Motion Graphics":
                return(
                    <MotionGraphicsProjectModal 
                        project={project as MotionGraphicsProject} 
                        {...commonProps} 
                    />
                );
            default:
                return <ProjectModal project={project as Project} {...commonProps} />
        };
    };

    return(
        <React.Fragment>
            <motion.div
                key={`${project.title}-${project.category}`}
                className="flex relative h-60 w-80 md:h-64 md:w-96 overflow-hidden" 
                whileHover={{
                    y: "-.5vh"
                }}
                onClick={() => setVisible(true)}
            >
                <img 
                    className="w-full h-full object-cover rounded-3xl" 
                    src={project.featuredImage ?? project.thumbnailUrl} 
                    alt={project.title}
                />
                <motion.div 
                    key={`${project.title}-${project.category}-content`}
                    className="absolute w-full h-full bg-black/70 top-0 bottom-0 left-0 right-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{
                        opacity: 1
                    }}
                >
                    <Flex className="justify-center items-center h-full flex-col">
                        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
                        <p className="text-white text-center">{project.subtitle}</p>
                        <Button color="secondary" className="mt-10" size="md">
                            <p className="font-semibold">View Project</p>
                        </Button>
                    </Flex>
                </motion.div>
            </motion.div>
            {renderModal()}
        </React.Fragment>
    );
};

export default FeaturedPortfolioCard;
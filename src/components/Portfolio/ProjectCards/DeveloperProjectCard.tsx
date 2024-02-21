import type { DeveloperProject } from '@@types/Portfolio';

import React, { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';
import { FaImage } from 'react-icons/fa';

import { Button, Card } from '@@components/Common';
import ProjectTechnology from '../ProjectTechnology';
import ProjectMediaBadge from '../ProjectMediaBadge';
import DeveloperProjectModal from './Modals/DeveloperProjectModal';

export interface DeveloperProjectCardProps {
    project: DeveloperProject
};

function DeveloperProjectCard({ project }: DeveloperProjectCardProps) {

    const [visible, setVisible] = useState<boolean>(false);

    const renderTechnologies = () => {
        return project.technologies.map((technology, index) => (
            <ProjectTechnology 
                key={`${project.title}-${technology}-${index}`}
                technology={technology}
            />
        ));
    };

    const renderPlaceholderImage = () => (
        <div className="h-72 w-72 flex items-center justify-center rounded-2xl bg-card-light">
            <FaImage className="text-6xl" />
        </div>
    );

    return(
        <React.Fragment>
            <motion.div
                className="w-full hover:cursor-pointer"
                initial={{ y: 0 }}
                whileHover={{ y: "-0.8vh" }}
                onClick={() => setVisible(true)}
            >
                <Card className="w-full">
                    <Flex className="gap-5 flex-col lg:flex-row items-center">
                        <Box className="flex items-center">
                            {
                                project.thumbnailUrl ? 
                                <img className="h-72 w-72 rounded-2xl" src={project.thumbnailUrl} alt={project.title} /> :
                                renderPlaceholderImage()
                            }
                        </Box>
                        <Box className="w-full lg:w-4/6 flex flex-col">
                            <div className="flex items-center justify-center lg:justify-start">
                                <h1 className="text-4xl font-bold mb-5 text-text mr-4">
                                    {project.title}
                                </h1>
                                <ProjectMediaBadge media={project.images} />
                            </div>
                            <p className="font-semibold text-center lg:text-left">{project.description}</p>
                            <Flex className="flex-col h-full justify-end pb-2">
                                <Flex className="gap-3 pt-5 flex-wrap justify-center lg:justify-start">
                                    {renderTechnologies()}
                                </Flex>
                                <Flex className="pt-6 gap-3 flex-wrap justify-center lg:justify-start">
                                    <Button color="secondary" size="sm" className="px-6">
                                        <FaGithub className="mr-2 text-lg" />
                                        <p className="font-bold">Github Repo</p>
                                    </Button>
                                    {
                                        project.url &&
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            <Button color="secondary" size="sm" className="px-6">
                                                <BsGlobe2 className="mr-2 text-lg" />
                                                <p className="font-bold">Live Site</p>
                                            </Button>
                                        </a>
                                    }
                                    <Button outlined color="secondary" size="sm" className="px-6">
                                        <p className="font-bold">View Project</p>
                                    </Button>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Card>
            </motion.div>
            <DeveloperProjectModal visible={visible} setVisible={setVisible} project={project} />
        </React.Fragment>
    );
};

export default DeveloperProjectCard;
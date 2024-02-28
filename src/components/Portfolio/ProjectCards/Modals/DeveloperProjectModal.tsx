import type { DeveloperProject } from '@@types/Portfolio';

import { Flex, Box } from 'reflexbox';
import { Carousel } from 'flowbite-react';
import { FaGithub } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';

import { Modal, Button, YouTubeEmbed } from '@@components/Common';
import ProjectTechnology from '../../ProjectTechnology';

import { youtube } from '@@utils';

export interface DeveloperProjectModalProps {
    project: DeveloperProject,
    visible: boolean,
    setVisible: (value: false) => void
};

function DeveloperProjectModal({ project, visible, setVisible }: DeveloperProjectModalProps) {

    const renderImages = () => {
        return project.images.map((url, index) => {
            const isYouTubeLink = youtube.isValidLink(url);
            const key = `${project.title}-img-${index}`;
            const alt = `${project.title}-${index + 1}`;
            return(
                isYouTubeLink ?
                <YouTubeEmbed key={key} title={`${project.title}-video-${index}`} source={url} /> :
                <img key={key} src={url} alt={alt} />
            );
        });
    };

    const renderTechnologies = () => {
        return project.technologies.map((technology, index) => (
            <ProjectTechnology 
                key={`${project.title}-${technology}-${index}`}
                technology={technology}
            />
        ));
    };

    return(
        <Modal motionKey={`${project.title}-modal`} visible={visible} setVisible={setVisible}>
            <Flex className="flex-col items-center">
                {
                    (project.images.length > 0) &&
                    <Box>
                        <div className="h-[50vh] min-w-[100vw] md:min-w-[50vw] flex items-center justify-center">
                            <Carousel className="h-5/6 w-5/6" slide={false}>
                                {renderImages()}
                            </Carousel>
                        </div>
                    </Box>
                    
                }
                <Box className="w-full">
                    <h1 className="text-3xl font-bold text-text text-center mb-5">{project.title}</h1>                        
                </Box>
                <Box className="w-full pb-10">
                    <h2 className="font-bold text-lg mb-4 text-muted">Description:</h2>
                    <p className="font-semibold text-sm">{project.description}</p>
                </Box>
                <Box className="w-full pb-8">
                    <h2 className="font-bold text-lg mb-4 text-muted">Technologies Used:</h2>
                    <div className="flex gap-2 flex-wrap">
                        {renderTechnologies()}
                    </div>
                </Box>
                <Box className="flex justify-center gap-2 w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button color="secondary" size="sm" className="px-6">
                            <FaGithub className="mr-2 text-lg" />
                            <p className="font-bold">Github Repo</p>
                        </Button>
                    </a>
                    {
                        project.url &&
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <Button color="secondary" size="sm" className="px-6">
                                <BsGlobe2 className="mr-2 text-lg" />
                                <p className="font-bold">Live Site</p>
                            </Button>
                        </a>
                    }
                </Box>
            </Flex>
        </Modal>
    );
};

export default DeveloperProjectModal;
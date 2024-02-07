import type { Project, DeveloperProject, MotionGraphicsProject } from '@@types/Portfolio';

import { Flex } from 'reflexbox';
import { motion } from 'framer-motion';
import { Button } from '@@components/Common';

export interface FeaturedPortfolioCardProps {
    project: Project | DeveloperProject | MotionGraphicsProject
};

function FeaturedPortfolioCard({ project }: FeaturedPortfolioCardProps) {
    return(
        <motion.div 
            className="flex h-64 w-96 overflow-hidden" 
            whileHover={{
                y: "-.5vh"
            }}
        >
            <img 
                className="w-full h-full object-cover rounded-3xl" 
                src={project.featuredImage ?? project.thumbnailUrl} 
                alt={project.title}
            />
            <motion.div 
                className="absolute bg-black/70 w-full h-full top-0 bottom-0 left-0 right-0 rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{
                    opacity: 1
                }}
            >
                <Flex className="justify-center items-center h-full flex-col">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <p>{project.subtitle}</p>
                    <Button color="secondary" className="mt-10" size="md">
                        <p className="font-semibold">View Project</p>
                    </Button>
                </Flex>
            </motion.div>
        </motion.div>
    );
};

export default FeaturedPortfolioCard;
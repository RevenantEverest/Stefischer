import type { 
    AllProjects, 
    Project,
    DeveloperProject, 
    MotionGraphicsProject, 
} from '@@types/Portfolio';

import { motion } from 'framer-motion';

import {
    ProjectCard,
    MotionGraphicsProjectCard,
    DeveloperProjectCard
} from './ProjectCards';

export interface PortfolioSingleProject {
    project: AllProjects,
    index: number
};

function calculateDelayIndex(project: AllProjects, index: number) {
    switch(project.category) {
        case "Logos":
            return Math.floor(index / 3);
        case "Motion Graphics":
            return Math.floor(index / 2);
        default:
            return index;
    }
};

function PortfolioSingleProject({ project, index }: PortfolioSingleProject) {

    const delayIndex = calculateDelayIndex(project, index);

    const renderProjectCard = () => {
        switch(project.category) {
            case "Backend":
                return <DeveloperProjectCard project={project as DeveloperProject} />
            case "Frontend":
                return <DeveloperProjectCard project={project as DeveloperProject} />
            case "Full-Stack":
                return <DeveloperProjectCard project={project as DeveloperProject} />
            case "Motion Graphics":
                return <MotionGraphicsProjectCard project={project as MotionGraphicsProject} />;
            default:
                return <ProjectCard project={project as Project} />
        }
    };

    return(
        <motion.div
            className={`
                ${(project.category === "Logos") && "w-3/12"}
                ${(project.category === "Motion Graphics") && "w-5/12"}
            `}
            initial={{ 
                x: "-20vw", 
                opacity: 0 
            }}
            animate={{ 
                x: 0, 
                opacity: 1, 
                transition: {
                    delay: delayIndex * 0.2,
                    duration: .5,
                    type: "spring"
                }
            }}
            exit={{
                x: 0,
                opacity: 0, 
                transition: {
                    delay: delayIndex * 0.05,
                    duration: .2,
                    type: "spring"
                }
            }}
        >
            {renderProjectCard()}
        </motion.div>
    );
};

export default PortfolioSingleProject;
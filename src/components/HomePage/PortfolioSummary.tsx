import type { Project, DeveloperProject, MotionGraphicsProject } from '@@types/Portfolio';

import { Flex, Box } from 'reflexbox';
import FeaturedPortfolioCard from './FeaturedPortfolioCard';

import { LOGO_PROJECTS, MOTION_GRAPHICS_PROJECTS, FULL_STACK_PROJECTS } from '@@constants';

function PortfolioSummary() {

    const featuredProjects: Array<Project | DeveloperProject | MotionGraphicsProject> = [
        FULL_STACK_PROJECTS.FiresideBOT,
        FULL_STACK_PROJECTS.DungeonTracker,
        FULL_STACK_PROJECTS.Acirhia,
        LOGO_PROJECTS.AarEey,
        LOGO_PROJECTS.HecticBoomer,
        LOGO_PROJECTS.Acero,
        MOTION_GRAPHICS_PROJECTS.HecticBoomer.Screen,
        MOTION_GRAPHICS_PROJECTS.HecticBoomer.Transition,
        MOTION_GRAPHICS_PROJECTS.DTMZombie.Transition,
    ];

    const renderProjects = () => {
        const FeaturedProjects = featuredProjects.map((project, index) => (
            <FeaturedPortfolioCard key={`featured-projects-${index}`} project={project} />
        ));

        return FeaturedProjects;
    };

    return(
        <Flex className="flex-col w-full items-center">
            <Box className="flex flex-col justify-center items-center pb-20 w-full">
                <h1 className="text-6xl font-semibold text-center">Recent Projects</h1>
                <p className="w-4/6 mt-6 font-semibold text-center">
                    A good developer knows the right tool for the job. 
                </p>
            </Box>
            <Flex className="flex-wrap gap-8 justify-center">
                {renderProjects()}
            </Flex>
        </Flex>
    );
};

export default PortfolioSummary;
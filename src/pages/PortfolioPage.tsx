import type { AllProjects } from '@@types/Portfolio';

import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Helmet } from 'react-helmet';

import { WaveDivider, Layout, BeamMeUp } from '@@components/Common';
import PortfolioWrapper from '@@components/Portfolio/PortfolioWrapper'

import { 
    FULL_STACK_PROJECTS, 
    FRONTEND_PROJECTS, 
    BACKEND_PROJECTS, 
    LOGO_PROJECTS, 
    MOTION_GRAPHICS_PROJECTS 
} from '@@constants';;

function PortfolioPage() {

    const projects: AllProjects[] = [
        ...FULL_STACK_PROJECTS.default,
        ...FRONTEND_PROJECTS.default,
        ...BACKEND_PROJECTS.default,
        ...LOGO_PROJECTS.default,
        ...MOTION_GRAPHICS_PROJECTS.default
    ];

    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer - Portfolio</title>
            </Helmet>
            <Flex className="fixed w-full">
                <Box className="flex w-full h-5/6 py-20 px-4 md:px-40 bg-gradient-to-tr from-primary to-secondary justify-center items-center">
                    <Flex className="h-[70vh] md:h-[66vh] lg:h-[40vh] pt-32">
                        <h1 className="text-8xl font-bold uppercase text-white/20">Portfolio</h1>
                    </Flex>
                </Box>
            </Flex>
            <Flex className="absolute left-0 right-0 top-[66.2vh] md:top-[66.2vh] lg:top-[36.2vh] justify-center bg-red-500">
                <WaveDivider />
            </Flex>
            <Flex className="relative bg-background w-full justify-center top-[56vh] pt-20 overflow-hidden">
                <Layout>
                    <div className="pb-32">
                        <PortfolioWrapper projects={projects} />
                    </div>
                    <div className="pt-32">
                        <BeamMeUp />
                    </div>
                </Layout>
            </Flex>
        </React.Fragment>
    );
};

export default PortfolioPage;
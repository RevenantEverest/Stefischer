import type { AllProjects } from '@@types/Portfolio';

import React from 'react';
import { Flex } from 'reflexbox';
import { Helmet } from 'react-helmet';

import { PageHeader, Layout, BeamMeUp } from '@@components/Common';
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
            <PageHeader title="Portfolio" />
            <Flex className="relative bg-background w-full justify-center top-[56vh] md:top-[80vh] lg:top-[56vh] pt-20 overflow-hidden">
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
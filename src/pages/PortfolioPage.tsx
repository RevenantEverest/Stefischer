import type { AllProjects } from '@@types/Portfolio';

import React from 'react';
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
                <Layout main>
                    <div className="pb-32">
                        <PortfolioWrapper projects={projects} />
                    </div>
                    <div className="pt-32 pb-20">
                        <BeamMeUp />
                    </div>
                </Layout>
        </React.Fragment>
    );
};

export default PortfolioPage;
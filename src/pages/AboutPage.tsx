import React from 'react';
import { Helmet } from 'react-helmet';

import { PageHeader, Layout, BeamMeUp } from '@@components/Common';
import AboutMeFull from '@@components/About/AboutMeFull';
import DeveloperTimeline from '@@components/About/DeveloperTimeline';

function AboutPage() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer - About</title>
            </Helmet>
            <PageHeader title="About" />
            <Layout main>
                <div className="pb-32">
                    <AboutMeFull />
                </div>
                <div>
                    <DeveloperTimeline />
                </div>
                <div className="pt-32 pb-20">
                    <BeamMeUp />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
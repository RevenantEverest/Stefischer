import React from 'react';
import { Flex } from 'reflexbox';
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
            <Flex className="relative bg-background w-full justify-center top-[56vh] md:top-[80vh] lg:top-[56vh] pt-20 overflow-hidden">
                <Layout>
                    <div className="pb-32">
                        <AboutMeFull />
                    </div>
                    <div>
                        <DeveloperTimeline />
                    </div>
                    <div className="pt-32">
                        <BeamMeUp />
                    </div>
                </Layout>
            </Flex>
        </React.Fragment>
    );
};

export default AboutPage;
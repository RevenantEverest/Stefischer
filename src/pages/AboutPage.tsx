import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Helmet } from 'react-helmet';

import { WaveDivider, Layout, BeamMeUp } from '@@components/Common';
import AboutMeSummary from '@@components/About/AboutMeSummary';
import DeveloperTimeline from '@@components/About/DeveloperTimeline';

function AboutPage() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer - About</title>
            </Helmet>
            <Flex className="fixed w-full">
                <Box className="flex w-full h-11/12 py-10 lg:py-20 px-4 md:px-40 bg-gradient-to-tr from-primary to-secondary justify-center items-center">
                    <Flex className="h-[70vh] md:h-[66vh] lg:h-[40vh] pt-32">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-white/20">About</h1>
                    </Flex>
                </Box>
            </Flex>
            <Flex className="absolute left-0 right-0 top-[36.2vh] md:top-[60.2vh] lg:top-[36.2vh] justify-center">
                <WaveDivider />
            </Flex>
            <Flex className="relative bg-background w-full justify-center top-[56vh] md:top-[80vh] lg:top-[56vh] pt-20 overflow-hidden">
                <Layout>
                    <div className="pb-32">
                        <AboutMeSummary />
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
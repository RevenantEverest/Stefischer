import React, { useEffect } from 'react';

import { Flex } from 'reflexbox';
import { Element, scrollSpy } from 'react-scroll';
import { Helmet } from 'react-helmet';

import { Layout, TiltDivider, WaveDivider, BeamMeUp } from '@@components/Common';

import Jumbotron from '@@components/Home/Jumbotron';
import SkillsAndExperience from '@@components/Home/SkillsAndExperience';
import TitleBlurbs from '@@components/Home/TitleBlurbs';
import AboutMeSummary from '@@components/About/AboutMeSummary';
import FeaturedProjects from '@@components/Portfolio/FeaturedProjects';
import ContactSection from '@@components/Contact/ContactSection';

import { SCROLL_ELEMENTS } from '@@constants';

function HomePage() {

    useEffect(() => {
        scrollSpy.update();
    }, []);

    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer</title>
            </Helmet>
            <Flex className="fixed">
                <Jumbotron scrollElements={SCROLL_ELEMENTS.HOMEPAGE} />
            </Flex>
            <Flex className="flex-col relative top-[70vh] lg:top-[76vh] pointer-events-none">
                <WaveDivider />
                <Layout>
                    <Element name={SCROLL_ELEMENTS.HOMEPAGE.about}>
                        <div className="my-32">
                            <AboutMeSummary />
                        </div>
                    </Element>
                    <div className="mb-64 mt-16">
                        <TitleBlurbs />
                    </div>
                    <div className="mb-32">
                        <SkillsAndExperience />
                    </div>
                </Layout>
                <div className="bg-gradient-to-tr from-primary to-secondary pointer-events-auto">
                    <TiltDivider />
                    <Layout transparent>
                        <div className="py-32">
                            <FeaturedProjects />
                        </div>
                    </Layout>
                    <TiltDivider rotate />
                </div>
                <Layout>
                    <Element className="w-full" name={SCROLL_ELEMENTS.HOMEPAGE.contact}>
                        <div className="my-32 w-full">
                            <ContactSection />
                        </div>
                    </Element>
                    <div className="pb-20 flex items-center justify-center">
                        <BeamMeUp />
                    </div>
                </Layout>
            </Flex>
        </React.Fragment>
    );
};

export default HomePage;
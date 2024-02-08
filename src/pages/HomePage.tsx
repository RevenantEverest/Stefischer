import React, { useEffect } from 'react';

import { Flex } from 'reflexbox';
import { Element, scrollSpy } from 'react-scroll';

import { Layout, TiltDivider, WaveDivider, BeamMeUp } from '@@components/Common';

/* Home */
import Jumbotron from '@@components/Home/Jumbotron';
import SkillsAndExperience from '@@components/Home/SkillsAndExperience';
import TitleBlurbs from '@@components/Home/TitleBlurbs';

/* About */
import AboutMeSummary from '@@components/About/AboutMeSummary';

/* Portfolio */
import PortfolioSummary from '@@components/Portfolio/PortfolioSummary';

/* Contact */
import ContactSection from '@@components/Contact/ContactSection';

import { SCROLL_ELEMENTS } from '@@constants';

function HomePage() {

    useEffect(() => {
        scrollSpy.update();
    }, []);

    return(
        <React.Fragment>
            <Flex className="fixed">
                <Jumbotron scrollElements={SCROLL_ELEMENTS.HOMEPAGE} />
            </Flex>
            <Flex className="absolute left-0 right-0 top-[66.2vh] md:top-[66.2vh] lg:top-[66.2vh] justify-center bg-red-500">
                <WaveDivider />
            </Flex>    
            <Flex className="relative bg-background w-full justify-center top-[86vh] pt-20">
                <Layout>
                    <Element name={SCROLL_ELEMENTS.HOMEPAGE.about}>
                        <div className="my-32">
                            <AboutMeSummary />
                        </div>
                    </Element>
                    <div className="my-32">
                        <TitleBlurbs />
                    </div>
                    <div className="mb-32">
                        <SkillsAndExperience />
                    </div>
                </Layout>
            </Flex>
            <Flex className="relative bg-background w-full justify-center top-[86vh] pt-20 z-10">
                <Flex className="absolute w-full justify-center top-[24vh]">
                    <TiltDivider />
                </Flex>
            </Flex>
            <Flex className="relative bg-gradient-to-tr from-primary to-secondary w-full justify-center top-[86vh] pt-32 pb-64">
                <Layout>
                    <div className="">
                        <PortfolioSummary />
                    </div>
                </Layout>
            </Flex>
            <Flex className="relative w-full justify-center top-[60vh] pt-20 z-10">
                <Flex className="absolute w-full justify-center top-[24vh]">
                    <TiltDivider rotate />
                </Flex>
            </Flex>
            <Flex className="relative bg-background w-full justify-center top-[75vh] py-20">
                <Layout>
                    <Element name={SCROLL_ELEMENTS.HOMEPAGE.contact}>
                        <div className="my-32">
                            <ContactSection />
                        </div>
                    </Element>
                    <div className="flex items-center justify-center">
                        <BeamMeUp />
                    </div>
                </Layout>
            </Flex>
            
        </React.Fragment>
    );
};

export default HomePage;
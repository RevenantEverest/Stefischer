import React from 'react';

import { Flex } from 'reflexbox';
import { GiAstronautHelmet } from "react-icons/gi";

import { Layout, TiltDivider, WaveDivider } from '@@components/Common';
import Jumbotron from '@@components/HomePage/Jumbotron';
import PortfolioSummary from '@@components/HomePage/PortfolioSummary';
import AboutMeSummary from '@@components/HomePage/AboutMeSummary';
import SkillsAndExperience from '@@components/HomePage/SkillsAndExperience';

function HomePage() {
    return(
        <React.Fragment>
            <Flex className="fixed">
                <Jumbotron />
            </Flex>
            <Flex className="absolute left-0 right-0 top-[66.2vh] md:top-[66.2vh] lg:top-[66.2vh] justify-center bg-red-500">
                <WaveDivider />
            </Flex>    
            <Flex className="relative bg-background w-full justify-center top-[86vh] pt-20">
                <Layout>
                    <div className="mb-64">
                        <AboutMeSummary />
                    </div>
                    <div className="mb-28">
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
                    <div className="">
                        <GiAstronautHelmet className="text-8xl" />
                    </div>
                </Layout>
            </Flex>
            
        </React.Fragment>
    );
};

export default HomePage;
import type { HomePageScrollElements } from '@@types/ScrollElements';

import Lottie from 'lottie-react';
import { Flex, Box } from 'reflexbox';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { Button } from '@@components/Common';

import { useWindowDimensions } from '@@hooks';
import { BREAKPOINTS } from '@@constants';

import developerTechnology from '@@assets/lottie/developer-technology.json';

export interface JumbotronProps {
    scrollElements: HomePageScrollElements
};

function Jumbotron({ scrollElements }: JumbotronProps) {

    const dimensions = useWindowDimensions();

    const buttonSize: "lg" | "md" = dimensions.width > BREAKPOINTS.LG ? "lg" : "md";

    return(
        <Flex className={`py-20 lg:py-32 bg-linear-to-tr/srgb from-primary to-secondary justify-center items-center`}>
            <Flex className="h-[75vh] md:h-[69vh] lg:h-[70vh] w-[100vw] md:px-20 xl:px-40">
                <Box className="flex items-center text-center md:text-left xl:w-9/12">
                    <motion.div
                        className="w-full"
                        initial={{ x: "-200vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: .5, type: "spring" }}
                    >
                        <Flex className="flex-col items-center justify-center xl:items-start w-[99vw] md:w-full">
                            <h1 className="text-[5rem] leading-[1] md:text-6xl lg:text-8xl font-bold uppercase text-white/30">Stefan Fischer</h1>
                            <h2 className="text-4xl leading-[1] md:text-3xl lg:text-4xl font-bold -mt-8 md:ml-8 text-white">Full Stack Developer</h2>
                            <br />
                            <div className="text-lg mt-4 lg:mt-8 w-11/12 text-center md:text-center xl:text-left md:w-10/12 text-white">
                                <p>
                                    I'm a digerati with a background in design, utilizing the modern web stack to bring new and innovative designs to the web.
                                </p>
                            </div>
                            <div className="flex gap-5 text-lg mt-5 lg:mt-14 w-full md:w-3/4 justify-center xl:justify-start">
                                <Link to="/portfolio">
                                    <Button color="white" size={buttonSize}>
                                        <p className="font-semibold text-black">Portfolio</p>
                                    </Button>
                                </Link>
                                <ScrollLink 
                                    to={scrollElements.contact}
                                    spy={true}
                                    smooth={true}
                                >
                                    <Button outlined color="white" size={buttonSize}>
                                        <p className="font-semibold text-white">Get In Touch</p>
                                    </Button>
                                </ScrollLink>
                            </div>
                        </Flex>
                    </motion.div>
                </Box>
                <Box className="hidden xl:flex w-3/6 justify-center">
                    <motion.div 
                        className="flex items-center justify-center"
                        initial={{ x: "200vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: .8, type: "spring" }}
                    >
                        <Lottie animationData={developerTechnology} className="w-11/12" />
                    </motion.div>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Jumbotron;
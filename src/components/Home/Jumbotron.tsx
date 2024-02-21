import type { HomePageScrollElements } from '@@types/ScrollElements';

import Lottie from 'lottie-react';
import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
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
        <Flex className={`w-full h-5/6 py-20 px-0 md:px-10 lg:px-40 bg-gradient-to-tr from-primary to-secondary justify-center items-center`}>
            <Flex className="h-[70vh] md:h-[66vh] lg:h-[70vh]">
                <Box flex="1.5 1 1" className="flex items-center text-center md:text-left">
                    <motion.div
                        className="w-full"
                        initial={{ x: "-200vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: .5, type: "spring" }}
                    >
                        <Flex className="flex-col items-center justify-center">
                            <h1 className="text-[5rem] leading-[1] md:text-6xl lg:text-8xl font-bold uppercase text-white/20">Stefan Fischer</h1>
                            <h2 className="text-4xl leading-[1] md:text-3xl lg:text-4xl font-bold -mt-8 md:ml-8">Full Stack Developer</h2>
                            <br />
                            <div className="text-lg mt-4 lg:mt-8 w-full text-left md:text-center lg:text-left md:w-3/4">
                                <p>
                                    I'm a digerati with a background in design, utilizing the modern web stack to bring new and innovative designs to the web.
                                </p>
                            </div>
                            <div className="flex gap-5 text-lg mt-5 lg:mt-14 w-full md:w-3/4 justify-center lg:justify-start">
                                <Link to="/portfolio">
                                    <Button color="white" size={buttonSize}>
                                        <p className="font-semibold">Portfolio</p>
                                    </Button>
                                </Link>
                                <ScrollLink 
                                    to={scrollElements.contact}
                                    spy={true}
                                    smooth={true}
                                >
                                    <Button outlined color="white" size={buttonSize}>
                                        <p className="font-semibold">Get In Touch</p>
                                    </Button>
                                </ScrollLink>
                            </div>
                        </Flex>
                    </motion.div>
                </Box>
                <Box flex="1 0 0" className="hidden md:flex">
                    <motion.div 
                        className="flex justify-end"
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
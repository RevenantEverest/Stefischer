import Lottie from 'lottie-react';
import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';

import { Button } from '@@components/Common';

import developerTechnology from '@@assets/lottie/developer-technology.json';

function Jumbotron() {
    return(
        <Flex className={`w-full h-5/6 py-20 px-4 md:px-40 bg-gradient-to-tr from-primary to-secondary justify-center items-center`}>
            <Flex className="h-[70vh] md:h-[66vh] lg:h-[70vh]">
                <Box flex="1.5 1 1" className="flex items-center text-center md:text-left">
                    <motion.div
                        initial={{ x: "-200vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: .5, type: "spring" }}
                    >
                        <Flex className="flex-col align-center justify-center">
                            <h1 className="text-8xl font-bold uppercase text-white/20">Stefan Fischer</h1>
                            <h2 className="text-4xl font-bold -mt-8 ml-8">Full Stack Developer</h2>
                            <br />
                            <div className="text-lg mt-8 w-full md:w-3/4">
                                <p>
                                    I'm a digerati with a background in design, utilizing the modern web stack to bring new and innovative designs to the web.
                                </p>
                            </div>
                            <div className="flex gap-5 text-lg mt-14 w-full md:w-3/4 justify-center md:justify-start">
                                <Button color="white" size="lg">
                                    Portfolio
                                </Button>
                                <Button outlined color="white" size="lg">
                                    Get In Touch
                                </Button>
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
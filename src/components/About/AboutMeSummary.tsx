import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { Button, Card, SocialIcon } from '@@components/Common';

import { IMAGE_RESOURCES, SCROLL_ELEMENTS } from '@@constants';

function AboutMeSummary() {

    const scrollLinkProps = {
        to: SCROLL_ELEMENTS.HOMEPAGE.contact,
        spy: true,
        smooth: true
    };

    return(
        <Card className="overflow-hidden">
            <Flex className="justify-center md:justify-start">
                <div className="mb-8 px-6">
                    <h1 className="font-semibold pb-2 text-lg">About Me</h1>
                    <div className="border-b-2 border-secondary w-14 ml-3 md:ml-0" />
                </div>
            </Flex>
            <Flex className="px-0 md:px-6 flex-col xl:flex-row lg:gap-20 xl:gap-0">
                <Box className="w-full xl:w-5/6 text-center lg:text-left pb-16">
                    <h1 className="font-bold text-4xl">Stefan Fischer</h1>
                    <h2 className="font-semibold text-secondary text-xl mb-6">Full Stack Developer ~ Graphic Designer ~ VFX Artist</h2>
                    <p className="pb-6">
                        Hey, I'm Stefan, a web developer who kicked off this journey in 2018 at General Assembly, diving 
                        into JavaScript and mastering the art of building full-stack applications. Following that, I ventured 
                        into a course exploring Java, Spring Boot, and Microservices, sponsored by a Fortune 500 company for 
                        a real-world perspective. 
                        <br />
                        <br />
                        Post-graduation, I focused on building my portfolio and took on exciting 
                        projects, like a Discord bot that gained 200,000 users, showcasing my commitment to user-friendly 
                        applications. Beyond coding, you'll find me exploring virtual worlds in video games, crafting music, 
                        or geeking out over building computers - all part of the creative blend I bring to web development.
                    </p>
                    <Flex className="pb-6 justify-center lg:justify-start flex-col items-center md:flex-row gap-5">
                        <ScrollLink {...scrollLinkProps}>
                            <Button color="secondary">
                                <p className="font-bold">Let's Connect</p>
                                <FontAwesomeIcon className="ml-2 mt-1" icon={faCoffee} />
                            </Button>
                        </ScrollLink>
                        <Link to="/about">
                            <Button outlined color="secondary" className="w-full">
                                <p className="font-bold">Read Full Story</p>
                                <FontAwesomeIcon className="ml-2 mt-1" icon={faArrowRight} />
                            </Button>
                        </Link>
                    </Flex>
                    <Flex className="gap-4 h-16 lg:h-0 justify-center lg:justify-start">
                        <SocialIcon gradient brand="GitHub" size="md" />
                        <SocialIcon gradient brand="LinkedIn" size="md" />
                        <SocialIcon gradient brand="Facebook" size="md" />
                        <SocialIcon gradient brand="Instagram" size="md" />
                    </Flex>
                </Box>
                <Box className="flex justify-center w-full xl:w-3/6 xl:justify-end items-center pr-0 lg:pr-16">
                    <motion.div 
                        className="absolute z-0"
                        animate={{
                            y: ["0vh", "-1vh", "0vh"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    >
                        <div className="h-64 w-64 md:h-72 md:w-72 bg-linear-to-bl/srgb from-primary to-secondary rounded-full relative -top-8 -right-8" />
                    </motion.div>
                    <motion.div 
                        className="z-10 h-72 w-72"
                    >
                        <img 
                            className="rounded-full z-10 border-card border-4 bg-card" 
                            src={IMAGE_RESOURCES.PORTRAIT} 
                            alt="head shot"
                        />
                    </motion.div>
                </Box>
            </Flex>
            <Flex className="px-6">
                <Flex className="flex-col w-full lg:w-5/6">
                    
                </Flex>
            </Flex>
        </Card>
    );
};

export default AboutMeSummary;
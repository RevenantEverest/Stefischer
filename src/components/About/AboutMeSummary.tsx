import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { Button, Card, SocialIcon } from '@@components/Common';

import { IMAGE_RESOURCES } from '@@constants';

function AboutMeSummary() {

    return(
        <Card className="overflow-hidden">
            <Flex className="justify-center md:justify-start">
                <div className="mb-8 px-6">
                    <h1 className="font-semibold pb-2 text-lg">About Me</h1>
                    <div className="border-b-2 border-secondary w-14 ml-3 md:ml-0" />
                </div>
            </Flex>
            <Flex className="px-6 flex-col lg:flex-row">
                <Box className="w-full lg:w-5/6 text-center lg:text-left pb-16">
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
                    <Flex className="pb-6 justify-center md:justify-start gap-5">
                        <Button color="secondary">
                            <p className="font-bold">Let's Get Coffee</p>
                            <FontAwesomeIcon className="ml-2 mt-1" icon={faCoffee} />
                        </Button>
                        <Link to="/about">
                            <Button outlined color="secondary">
                                <p className="font-bold">Read Full Story</p>
                                <FontAwesomeIcon className="ml-2 mt-1" icon={faArrowRight} />
                            </Button>
                        </Link>
                    </Flex>
                    <Flex className="gap-4 h-16 lg:h-0 justify-center md:justify-start">
                        <SocialIcon gradient brand="GitHub" size="md" />
                        <SocialIcon gradient brand="LinkedIn" size="md" />
                        <SocialIcon gradient brand="Facebook" size="md" />
                        <SocialIcon gradient brand="Instagram" size="md" />
                    </Flex>
                </Box>
                <Box className="flex justify-center w-full lg:w-3/6 lg:justify-end items-center pr-0 lg:pr-16">
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
                        <div className="h-72 w-72 bg-gradient-to-bl from-primary to-secondary rounded-full relative -top-8 -right-8" />
                    </motion.div>
                    <motion.div 
                        className="z-10"
                    >
                        <img 
                            className="rounded-full h-72 z-10 border-card border-4 bg-card" 
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
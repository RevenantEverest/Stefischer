import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { Button, Card, SocialIcon } from '@@components/Common';

import { IMAGE_RESOURCES } from '@@constants';

function AboutMeFull() {
    return(
        <Card className="overflow-hidden">
            <Flex className="justify-start">
                <div className="mb-8 px-6">
                    <h1 className="font-semibold pb-2 text-lg">About Me</h1>
                    <div className="border-b-2 border-secondary w-14 ml-3 md:ml-0" />
                </div>
            </Flex>
            <Flex className="px-0 md:px-6 flex-col xl:flex-row items-center justify-center gap-10 xl:gap-0">
                <Box className="w-full xl:w-5/6 pb-16">
                    <h1 className="font-bold text-4xl">Stefan Fischer</h1>
                    <h2 className="font-semibold text-secondary text-xl mb-6">Full Stack Developer ~ Graphic Designer ~ VFX Artist</h2>
                    <p className="pb-6">
                        Hey there! I'm Stefan, and I jumped into the world of web development back in 2018. My coding adventure 
                        kicked off at General Assembly, where I got hands-on with JavaScript and learned the ins and outs of 
                        building full-stack applications using Node.js, Express.js, React.js, and PostgreSQL.
                        <br />
                        <br />
                        After wrapping up there, I decided to keep the learning train rolling. I hopped into another course that 
                        dived deep into Java, Spring Boot, and Microservices - the cool part? It was sponsored by a big-shot Fortune 500 company, 
                        giving me a solid peek into industry practices and standards.
                        <br />
                        <br />
                        Post-graduation from General Assembly, I got to work building up my portfolio and tackling some cool 
                        projects. One highlight was a Discord bot that really took off, scoring a massive 200,000 users. It 
                        was a confidence booster and a nod to my commitment to creating applications that are not just 
                        functional but also user-friendly.
                        <br />
                        <br />
                        Beyond the code, I've got a few other things keeping me busy. Whether I'm diving into virtual worlds 
                        through video games, finding my groove with music composition, or geeking out over building computers, 
                        there's always something creative brewing. Join me on this journey where every line of code is a story, 
                        and every project is a piece of the passion I bring to web development.
                    </p>
                    <Flex className="pb-6 justify-center lg:justify-start gap-5">
                        <Link to="/contact">
                            <Button color="secondary">
                                <p className="font-bold">Let's Get Coffee</p>
                                <FontAwesomeIcon className="ml-2 mt-1" icon={faCoffee} />
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
                <Box className="flex justify-center w-full lg:w-3/6 xl:justify-end items-center pr-0 lg:pr-16">
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
                        <div className="h-64 w-64 md:h-72 md:w-72 bg-gradient-to-bl from-primary to-secondary rounded-full relative -top-8 -right-8" />
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

export default AboutMeFull;
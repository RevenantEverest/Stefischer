import type { IconType } from 'react-icons/lib';

import { Flex, Box } from 'reflexbox';
import { motion } from 'framer-motion';
import { 
    SiBun, 
    SiTypescript, 
    SiExpo, 
    SiPython, 
    SiReact,
    SiRedux,
    SiDjango,
    SiCss3,
    SiHtml5,
    SiNodedotjs,
    SiDocker,
    SiGit,
    SiJest,
    SiAdobephotoshop,
    SiAdobeaftereffects,
    SiJavascript
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

interface Skill {
    icon: IconType,
    title: string
};

function SkillsAndExperience() {

    const skills: Skill[] = [
        { icon: SiGit, title: "Git" },
        { icon: SiHtml5, title: "HTML" },
        { icon: SiCss3, title: "CSS" },
        { icon: SiJavascript, title: "JavaScript" },
        { icon: SiNodedotjs, title: "Node.js" },
        { icon: SiBun, title: "Bun" },
        { icon: SiTypescript, title: "Typescript" },
        { icon: SiReact, title: "React" },
        { icon: SiRedux, title: "Redux" },
        { icon: SiJest, title: "Jest" },
        { icon: BiLogoPostgresql, title: "PostgreSQL" },
        { icon: SiExpo, title: "Expo" },
        { icon: SiPython, title: "Python" },
        { icon: SiDjango, title: "Django" },
        { icon: SiDocker, title: "Docker" },
        { icon: SiAdobephotoshop, title: "Photoshop" },
        { icon: SiAdobeaftereffects, title: "After Effects" }
    ];

    const renderSkills = () => {
        return skills.map((skill, index) => (
            <motion.div 
                key={`skill-${index}`} 
                className="flex flex-col justify-center items-center group"
                whileHover={{
                    y: "-.5vh"
                }}
            >
                <motion.div
                    className="flex flex-col justify-center items-center"
                    initial={{ opacity: 0, y: "15vh" }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.05 } }}
                >
                
                    <skill.icon 
                        className="text-6xl group z-10"
                    />
                    <p className="text-center mt-3 font-semibold z-10">{skill.title}</p>
                    <div className="h-16 w-16 absolute bg-primary blur-lg z-0 hidden group-hover:block duration-75 ease-in-out" />
                </motion.div>
            </motion.div>
        ));
    };

    return(
        <Flex className="justify-center text-center flex-col">
            <Box className="flex flex-col justify-center items-center pb-20">
                <p className="uppercase text-muted mb-2 text-lg">The right tool for the job</p>
                <h1 className="text-6xl font-semibold text-center text-transparent bg-gradient-to-br from-primary to-secondary bg-clip-text ">Skills & Experience</h1>
                <p className="w-4/6 mt-6 font-semibold">
                    A good developer knows the right tool for the job. 
                </p>
            </Box>
            <Box className="flex justify-center py-4">
                <Flex className="flex-wrap w-4/6 gap-8 justify-center">
                {renderSkills()}
                </Flex>
            </Box>
        </Flex>
    );
};

export default SkillsAndExperience;
import { Flex } from 'reflexbox';
import { Tooltip } from 'flowbite-react';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import { GiAstronautHelmet } from "react-icons/gi";

function BeamMeUp() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return(
        <Flex className="w-full items-center justify-center">
            <motion.div
                className="w-[10rem] flex items-center justify-center hover:cursor-pointer"
                whileHover={{
                    scale: [1, 1.2]
                }}
                transition={{
                    duration: .5,
                }}
                onClick={() => scrollToTop()}
            >
                <Tooltip 
                    arrow={false}
                    content="Beam Me Up Scotty!" 
                    className="bg-card font-semibold"
                >
                    <div className="bg-secondary p-8 rounded-full">
                        <GiAstronautHelmet className="text-6xl" />
                    </div>
                </Tooltip>
            </motion.div>
        </Flex>
    );
};

export default BeamMeUp;
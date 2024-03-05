import type { RootState } from '@@store/index';

import { Flex } from 'reflexbox';
import { Tooltip } from 'flowbite-react';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import { GiAstronautHelmet } from 'react-icons/gi';
import { useSelector } from 'react-redux';

import { colors } from '@@utils';

function BeamMeUp() {

    const currentTheme = useSelector((state: RootState) => state.theme);
    const secondaryContrast = colors.hexToContrast(currentTheme.colors.secondary, currentTheme.colors.text);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return(
        <Flex className="w-full items-center justify-center">
            <motion.div
                className="w-[10rem] flex flex-col gap-5 items-center justify-center hover:cursor-pointer"
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
                    className="bg-card text-text font-semibold"
                >
                    <div className="bg-secondary p-8 rounded-full">
                        <GiAstronautHelmet className={`text-6xl ${secondaryContrast >= 3 ? "text-white" : "text-black"}`} />
                    </div>
                </Tooltip>
                <span 
                    className="bg-card px-2 py-1 w-44 text-center rounded-lg font-semibold text-md md:hidden"
                >
                    Beam Me Up Scotty!
                </span>
            </motion.div>
        </Flex>
    );
};

export default BeamMeUp;
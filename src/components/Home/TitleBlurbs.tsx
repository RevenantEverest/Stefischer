import { Flex } from 'reflexbox';
import { motion } from 'framer-motion';

import { FaCode, FaPhotoFilm } from 'react-icons/fa6';
import { MdDesignServices } from 'react-icons/md';

import { Card } from '@@components/Common';

function TitleBlurbs() {

    const blurbs = [
        { 
            icon: FaCode, 
            title: "Full Stack Developer", 
            blurb: `
                I'm prepared to lay the foundation and base structure of any application professionally, to ensure it supports the entire edifice.
            `
        },
        { 
            icon: MdDesignServices, 
            title: "Graphic Designer", 
            blurb: `
                I value designs that can convey their messages clearly, and effectively while maintaining simple content structures, and clean design patterns.
            `
        },
        { 
            icon: FaPhotoFilm, 
            title: "Visual Effects Artist", 
            blurb: `
                My experience in the field has given me a vast array of concepts and skills to apply to my work.
            `
        },
    ];

    const renderBlurbs = () => {
        return blurbs.map((blurb, index) => (
            <motion.div
                className="w-3/6"
                whileHover={{
                    y: "-2.5vh"
                }}
            >
                <Card 
                    key={`title-blurb-${index}`} 
                    className="h-64 text-center flex items-center justify-center"
                >
                    <div className="flex flex-col justify-center">
                        <blurb.icon className="text-secondary text-6xl w-full mb-5" />
                        <h1 className="text-3xl font-bold mb-4">{blurb.title}</h1>
                        <p className="font-semibold">{blurb.blurb}</p>
                    </div>
                </Card>
            </motion.div>
        ));
    };

    return(
        <Flex className="gap-8">
            {renderBlurbs()}
        </Flex>
    );
};

export default TitleBlurbs;
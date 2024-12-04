import { Flex } from 'reflexbox';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

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
            `,
            linkTo: "/portfolio"
        },
        { 
            icon: MdDesignServices, 
            title: "Graphic Designer", 
            blurb: `
                I value designs that can convey their messages clearly, and effectively while maintaining simple content structures, and clean design patterns.
            `,
            linkTo: "/portfolio"
        },
        { 
            icon: FaPhotoFilm, 
            title: "Visual Effects Artist", 
            blurb: `
                My experience in the field has given me a vast array of concepts and skills to apply to my work.
            `,
            linkTo: "/portfolio"
        },
    ];

    const renderBlurbs = () => {
        return blurbs.map((blurb, index) => (
            <motion.div 
                key={`title-blurb-${index}`}
                className="w-full lg:w-3/6"
                whileHover={{
                    y: "-2.5vh"
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: "15vh" }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.5 } }}
                >
                    <Link to={blurb.linkTo}>
                        <Card className="m-h-64 text-center flex items-center justify-center">
                            <div className="flex flex-col justify-center">
                                <blurb.icon className="text-secondary text-6xl w-full mb-5" />
                                <h1 className="text-3xl font-bold mb-4">{blurb.title}</h1>
                                <p className="font-semibold">{blurb.blurb}</p>
                            </div>
                        </Card>
                    </Link>
                </motion.div>
            </motion.div>
        ));
    };

    return(
        <Flex className="gap-8 flex-col items-center justify-center xl:flex-row">
            {renderBlurbs()}
        </Flex>
    );
};

export default TitleBlurbs;
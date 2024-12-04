import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

import { Flex } from 'reflexbox';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { PERSONAL_LINKS } from '@@constants';

type SocialBrand =  "GitHub" | "LinkedIn" | "Facebook" | "Instagram";
type SocialIconSize = "sm" | "md" | "lg";

export interface SocialIconProps {
    brand: SocialBrand,
    size: SocialIconSize,
    gradient?: boolean,
    containerClassName?: string,
    iconClassName?: string
};

function SocialIcon({ brand, size, gradient, containerClassName, iconClassName }: SocialIconProps) {

    const brandLinks: Record<SocialBrand, string> = {
        "GitHub": PERSONAL_LINKS.GITHUB,
        "LinkedIn": PERSONAL_LINKS.LINKEDIN,
        "Facebook": PERSONAL_LINKS.FACEBOOK,
        "Instagram": PERSONAL_LINKS.INSTAGRAM
    };

    const brandIcon: Record<SocialBrand, IconDefinition> = {
        "GitHub": faGithub,
        "LinkedIn": faLinkedinIn,
        "Facebook": faFacebookF,
        "Instagram": faInstagram
    };

    const sizeClasses: Record<SocialIconSize, string> = {
        "sm": "p-4 text-md",
        "md": "p-6 text-2xl",
        "lg": "p-7 text-3xl"
    };

    const backgroundClassName = gradient ? "bg-linear-to-bl/srgb from-primary to-secondary text-white" : "bg-secondary text-card"

    return(
        <Link to={brandLinks[brand]} target="_blank" rel="noopener noreferrer">
            <motion.div
                whileHover={{
                    y: "-.5vh"
                }}
            >
                <Flex 
                    className={`
                        ${backgroundClassName} 
                        rounded-full items-center justify-center 
                        ${sizeClasses[size]} 
                        ${containerClassName}
                    `}
                >
                    <FontAwesomeIcon 
                        className={`absolute ${iconClassName}`} 
                        icon={brandIcon[brand]}
                    />
                </Flex>
            </motion.div>
        </Link>
    );
};

export default SocialIcon;
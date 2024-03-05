import type { Location } from 'react-router-dom';
import type { Theme } from '@@types/theme';

import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { Button } from '@@components/Common';

import { SCROLL_ELEMENTS } from '@@constants';
import { colors } from '@@utils';

export interface GetInTouchProps {
    theme: Theme,
    solidBackground: boolean,
    location: Location
};

function GetInTouch({ theme, solidBackground, location }: GetInTouchProps) {

    const secondaryContrast = colors.hexToContrast(theme.colors.secondary, "#ffffff");
    const backgroundContrast = colors.hexToContrast(theme.colors.background, "#ffffff");

    const scrollLinkProps = {
        to: SCROLL_ELEMENTS.HOMEPAGE.contact,
        spy: true,
        smooth: true
    };

    const renderButton = () => (
        <Button 
            outlined 
            color={
                solidBackground ? 
                (backgroundContrast >= 3 ? "white" : "secondary") : 
                (secondaryContrast >= 3 ? "white" : "primary" )
            } 
            size="md"
        >
            <span 
                className={`
                    font-semibold duration-300 
                    ${
                        solidBackground ? 
                        (backgroundContrast >= 3 ? "text-white" : "text-secondary") : 
                        (secondaryContrast >= 3 ? "text-white" : "text-primary")
                    }
                `}
            >
                Get In Touch
            </span>
        </Button>
    );

    return(
        <React.Fragment>
            {
                location.pathname === "/" ?
                <ScrollLink {...scrollLinkProps}>{renderButton()}</ScrollLink> :
                <Link to="/contact">{renderButton()}</Link>
            }
        </React.Fragment>
    );
};

export default GetInTouch;
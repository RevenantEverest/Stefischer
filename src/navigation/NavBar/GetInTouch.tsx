import type { Location } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { Button } from '@@components/Common';

import { SCROLL_ELEMENTS } from '@@constants';

export interface GetInTouchProps {
    location: Location
};

function GetInTouch({ location }: GetInTouchProps) {

    const scrollLinkProps = {
        to: SCROLL_ELEMENTS.HOMEPAGE.contact,
        spy: true,
        smooth: true
    };

    const renderButton = () => (
        <Button outlined color="white" size="md">
            <span className="font-semibold text-white">Get In Touch</span>
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
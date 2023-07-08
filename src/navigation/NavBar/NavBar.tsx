import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* Redux */
import type { Theme } from '@@types/theme';

import { _HomeRoutes } from '../_Routes';

import { MobileNav } from '@@navigation/MobileNav';

import { IMAGE_RESOURCES } from '@@constants';
import { navigation } from '../../utils';

interface NavBarProps {
    theme: Theme,
    location: Location
};

function NavBar({ theme, location }: NavBarProps) {

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const renderRoutes = () => {
        const Routes = _HomeRoutes.filter((route) => route.displayNav).map((route, index) => {
            const isActive = navigation.isActiveRoute(location.pathname, route);
            return(
                <Link className={`${isActive && "font-bold"} mx-4`} to={route.path} key={`nav-link-${index}-${route.title}`}>
                    {route.title}
                </Link>
            );
        });

        return Routes;
    };

    return(
        <div className="w-full">
            <Navbar 
                theme={{ 
                    base: `
                        ${theme.tailwind.background}
                        fixed
                        px-2 py-3 sm:px-4 rounded first:relative first:z-50
                    ` 
                }} 
                fluid 
                rounded
            >
                <Flex className="w-full self-center justify-center">
                    <Flex className="w-full md:w-1/2" alignItems="center" alignContent="center">
                        <Box flex="1 1 auto">
                            <Link to="/" className="flex items-center">
                                <img
                                    src={IMAGE_RESOURCES.LOGO}
                                    className="h-14"
                                    alt="Afflurish Logo"
                                />
                            </Link>
                        </Box>
                        <Box flex="1 1 auto" className="hidden md:flex md:justify-center md:items-center">
                            {renderRoutes()}
                        </Box>
                        <Box flex="1 1 auto" className="flex items-center justify-end">
                            <div className="ml-4 mr-2 flex md:hidden justify-center content-center items-center" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                                <FontAwesomeIcon className="text-2xl" icon={faBars} />
                            </div>
                        </Box>
                    </Flex>
                </Flex>
            </Navbar>
            <AnimatePresence key="navbar-ap" mode="wait">
                {
                    isMobileOpen && 
                    <MobileNav 
                        location={location} 
                        routes={_HomeRoutes} 
                        isOpen={isMobileOpen} 
                        setIsOpen={setIsMobileOpen}
                    />
                }
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
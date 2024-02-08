import type { Location } from 'react-router-dom';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { _HomeRoutes } from '@@navigation/_Routes';
import { MobileNav } from '@@navigation/MobileNav';
import GetInTouch from './GetInTouch';

import { IMAGE_RESOURCES } from '@@constants';
import { navigation } from '@@utils';

interface NavBarProps {
    location: Location
};

function NavBar({ location }: NavBarProps) {

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
        <div className="w-full absolute">
            <Navbar 
                theme={{
                    root: {
                        base: `
                            bg-transparent
                            absolute
                            px-2 py-3 sm:px-4 rounded first:relative first:z-50
                        `
                    }
                }} 
                fluid 
                rounded
            >
                <Flex className="w-full self-center justify-center">
                    <Flex className="w-full md:w-4/5">
                        <Box flex="1 1 auto">
                            <Flex>
                                <Box>
                                    <Link to="/" className="flex items-center">
                                        <img
                                            src={IMAGE_RESOURCES.LOGO}
                                            className="h-14 mr-4 rounded-full"
                                            alt="Stefischer Logo"
                                        />
                                    </Link>
                                </Box>
                                <Box className="hidden md:flex items-center">
                                    {renderRoutes()}
                                </Box>
                            </Flex>
                        </Box>
                        <Box flex="1 1 auto" className="hidden md:flex md:justify-end md:items-center">
                            <GetInTouch location={location} />
                        </Box>
                        <Box flex="1 1 auto" className="flex items-center justify-end md:hidden">
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
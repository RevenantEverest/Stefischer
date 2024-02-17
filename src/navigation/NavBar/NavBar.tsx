import type { Location } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { _HomeRoutes } from '@@navigation/_Routes';
import { MobileNav } from '@@navigation/MobileNav';
import GetInTouch from './GetInTouch';

import { IMAGE_RESOURCES } from '@@constants';
import { useScrollPosition } from '@@hooks';
import { navigation } from '@@utils';

interface NavBarProps {
    location: Location
};

function NavBar({ location }: NavBarProps) {

    const scrollPosition = useScrollPosition();
    const [solidBackground, setSolidBackground] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const solidPosition = 550;

        if(scrollPosition > solidPosition) {
            setSolidBackground(true);
        }

        if(scrollPosition < solidPosition) {
            setSolidBackground(false);
        }
    }, [scrollPosition]);

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
        <div className="w-full fixed z-50">
            <Navbar 
                theme={{
                    root: {
                        base: `
                            bg-transparent
                            absolute
                            px-2 py-3 sm:px-4 rounded first:relative
                            transition-opacity
                        `
                    }
                }} 
                fluid 
                rounded
            >
                <AnimatePresence mode="wait">
                {
                    solidBackground &&
                    <motion.div 
                        className="fixed w-[140vw] top-0 left-0"
                        initial={{ skew: -50, x: "120vw" }}
                        animate={{ 
                            skew: 0, 
                            x: "-20vw", 
                            transition: { duration: .3 } 
                        }}
                        exit={{
                            skew: 50,
                            x: "120vw",
                            transition: { duration: .3 }
                        }}
                    >
                        <div className="h-full w-full bg-background absolute py-11 z-40" />
                    </motion.div>
                }
                </AnimatePresence>
                <Flex className="w-full self-center justify-center z-50">
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
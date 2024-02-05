import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import type { Location } from 'react-router-dom';
import type { Route } from '@@types/routes';

import MobileNavRoute from './MobileNavRoute';

export interface MobileNavProps {
    location: Location,
    routes: Route[],
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

function MobileNav({ location, routes, isOpen, setIsOpen }: PropsWithChildren<MobileNavProps>) {

    const { initial, animate, exit, transition } = {
        initial: { y: "-100vh" },
        animate: { y: 0 },
        exit: { y: "-100vh" },
        transition: { duration: .3 }
    };

    const renderRoutes = () => {
        const Routes = routes.filter((route) => route.displayNav).map((route, index) => {
            const key = `nav-link-${index}-${route.title}`;
            return(
                <div key={key} onClick={() => setIsOpen(!isOpen)}>
                    <MobileNavRoute location={location} route={route} />
                </div>
            );
        });

        return(
            <div className="ml-5 mt-10">
                <div className="flex flex-col w-52">
                    {Routes}
                </div>
            </div>
        );
    };

    return(
        <motion.div key="mobile-nav" className="z-10 absolute bg-neutral-800 w-screen h-screen" initial={initial} animate={animate} exit={exit} transition={transition}>
            {renderRoutes()}
        </motion.div>
    );
};

export default MobileNav;
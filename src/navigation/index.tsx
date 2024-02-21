import type { Theme } from '@@types/theme';

import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { NavBar } from './NavBar';
import { theme as themeUtils } from '@@utils';

export interface NavigationProps {
    theme: Theme,
    container: JSX.Element
};

function Navigation({ theme, container }: NavigationProps) {

    const location = useLocation();

    const validateTheme = useCallback(() => {
        themeUtils.applyTheme(theme);
    }, [theme])
    
    useEffect(() => {
        validateTheme();
    }, [validateTheme, theme]);

    /* Scroll to top of page when location changes */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return(
        <div 
            className={`
                text-text
                bg-background
            `}
        >   
            <Toaster
                position="bottom-center"
                toastOptions={{
                    style: {
                        border: "none",
                        background: "transparent",
                        boxShadow: "none",
                        maxWidth: "33%"
                    }
                }}
            />
            <NavBar location={location} />
            {container}
        </div>
    );
};

export default Navigation;
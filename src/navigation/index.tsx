import type { Theme } from '@@types/theme';

import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

    return(
        <div 
            className={`
                text-text
                bg-background
            `}
        >
            <NavBar location={location} theme={theme} />
            {container}
        </div>
    );
};

export default Navigation;
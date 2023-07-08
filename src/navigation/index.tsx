import { useLocation } from 'react-router-dom';

import type { Theme } from '@@types/theme';

import { NavBar } from './NavBar';

export interface NavigationProps {
    theme: Theme,
    container: JSX.Element
};

function Navigation({ theme, container }: NavigationProps) {

    const location = useLocation();

    return(
        <div 
            className={`
                ${theme.tailwind.background} 
                ${theme.tailwind.text}
                h-screen 
                w-screen
            `}
        >
            <NavBar location={location} theme={theme} />
            {container}
        </div>
    );
};

export default Navigation;
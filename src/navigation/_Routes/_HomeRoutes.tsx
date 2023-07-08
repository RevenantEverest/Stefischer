import { Route } from '@@types/routes';

import { 
    HomeContainer,
    AboutContainer,
    ContactContainer
} from '@@containers/index';

const _HomeRoutes: Route[] = [
    {
        title: "Home",
        path: "/",
        container: <HomeContainer />,
        displayNav: true
    },
    {
        title: "About",
        path: "/about",
        container: <AboutContainer />,
        displayNav: true
    },
    {
        title: "Contact",
        path: "/contact",
        container: <ContactContainer />,
        displayNav: true
    },
];

export default _HomeRoutes;
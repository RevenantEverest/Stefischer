import { Route } from '@@types/routes';

import { 
    HomeContainer,
    AboutContainer,
    ContactContainer,
    PortfolioContainer,
    BlogContainer
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
        displayNav: false
    },
    {
        title: "Portfolio",
        path: "/portfolio",
        container: <PortfolioContainer />,
        displayNav: true
    },
    {
        title: "Blog",
        path: "/blog",
        container: <BlogContainer />,
        displayNav: true
    },
];

export default _HomeRoutes;
import type { Route } from '@@types/routes';
import type { RouteObject } from 'react-router-dom';
import { _HomeRoutes } from '@@navigation/_Routes';

export function isActiveRoute(currentPathname: string, route: Route): boolean {
    const re = /^.+?(?=\/|$)/g;
    const matchRes = currentPathname.match(re)![0];

    return matchRes === route.path;
};

export function generateRouter(): RouteObject[] {
    return _HomeRoutes.map((route): RouteObject => {
        return {
            path: "/",
            element: route.container
        };
    });
};
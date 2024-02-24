import type { Route } from '@@types/routes';

import { _HomeRoutes } from '@@navigation/_Routes';
import { navigation } from '@@utils';

describe("Navigation Utils", () => {
    describe("given the current pathname is active", () => {
        it("should return true", () => {
            const route: Route = _HomeRoutes.filter((route) => route.path === "/contact")[0];
            const currentPathname = "/contact";
            const isActive = navigation.isActiveRoute(currentPathname, route);

            expect(isActive).toBe(true);
        });
    });

    describe("given the current pathname is NOT active", () => {
        it("should return false", () => {
            const route: Route = _HomeRoutes.filter((route) => route.path === "/contact")[0];
            const currentPathname = "/about";
            const isActive = navigation.isActiveRoute(currentPathname, route);

            expect(isActive).toBe(false);
        });
    });
});
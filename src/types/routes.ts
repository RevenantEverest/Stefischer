import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Route {
    title: string,
    path: string,
    container: JSX.Element,
    displayNav?: boolean,
    faIcon?: IconProp,
};
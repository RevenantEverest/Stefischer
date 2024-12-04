import type { DeveloperProject } from '@@types/Portfolio';

import Archiver from './archiver';
import GW2EventCrawler from './gw2EventCrawler';
import Spindle from './spindle';

/*
    Order projects here for display on Portfolio
*/
const BackendProjects: DeveloperProject[] = [
    Archiver,
    Spindle,
    GW2EventCrawler
];

export { Archiver, GW2EventCrawler, Spindle };
export default BackendProjects;
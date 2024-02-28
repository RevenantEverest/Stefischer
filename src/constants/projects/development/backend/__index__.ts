import type { DeveloperProject } from '@@types/Portfolio';

import Archiver from './archiver';
import GW2EventCrawler from './gw2EventCrawler';

/*
    Order projects here for display on Portfolio
*/
const BackendProjects: DeveloperProject[] = [
    Archiver,
    GW2EventCrawler
];

export { Archiver, GW2EventCrawler };
export default BackendProjects;
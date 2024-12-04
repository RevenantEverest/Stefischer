import type { DeveloperProject } from '@@types/Portfolio';

import CultOfThreads from './cultOfThreads';
import PhasmophobiaGhostTool from './phasmophobiaGhostTool';
import RummyScorer from './rummyScorer';

/*
    Order projects here for display on Portfolio
*/
const FrontendProjects: DeveloperProject[] = [
    RummyScorer,
    CultOfThreads,
    PhasmophobiaGhostTool,
];

export { CultOfThreads, PhasmophobiaGhostTool, RummyScorer };
export default FrontendProjects;
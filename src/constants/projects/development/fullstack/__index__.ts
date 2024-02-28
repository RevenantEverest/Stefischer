import type { DeveloperProject } from '@@types/Portfolio';

import Acirhia from './acirhia';
import DungeonTracker from './dungeonTracker';
import FiresideBOT from './firesidebot';
import WorkTimeManager from './workTimeManager';

/*
    Order projects here for display on Portfolio
*/
const FullStackProjects: DeveloperProject[] = [
    FiresideBOT,
    DungeonTracker,
    WorkTimeManager,
    Acirhia,
];

export { Acirhia, DungeonTracker, FiresideBOT, WorkTimeManager };

export default FullStackProjects;
import type { DeveloperProject } from '@@types/Portfolio';

import Acirhia from './acirhia';
import Afflurish from './afflurish';
import DungeonTracker from './dungeonTracker';
import FiresideBOT from './firesidebot';
import WorkTimeManager from './workTimeManager';

/*
    Order projects here for display on Portfolio
*/
const FullStackProjects: DeveloperProject[] = [
    FiresideBOT,
    Afflurish,
    DungeonTracker,
    WorkTimeManager,
    Acirhia,
];

export { Acirhia, Afflurish, DungeonTracker, FiresideBOT, WorkTimeManager };

export default FullStackProjects;
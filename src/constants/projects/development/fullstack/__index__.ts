import type { DeveloperProject } from '@@types/Portfolio';

import Acirhia from './acirhia';
import DungeonTracker from './dungeonTracker';
import FiresideBOT from './firesidebot';

const FullStackProjects: DeveloperProject[] = [
    FiresideBOT,
    DungeonTracker,
    Acirhia
];

export { Acirhia, DungeonTracker, FiresideBOT };

export default FullStackProjects;
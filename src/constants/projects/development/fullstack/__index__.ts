import type { DeveloperProject } from '@@types/Portfolio';

import Acirhia from './acirhia';
import Afflurish from './afflurish';
import DungeonTracker from './dungeonTracker';
import FiresideBOT from './firesidebot';
import LinearDiscord from './linearDiscord';
import OpenAnimeAPI from './openAnimeAPI';
import WorkTimeManager from './workTimeManager';

/*
    Order projects here for display on Portfolio
*/
const FullStackProjects: DeveloperProject[] = [
    FiresideBOT,
    Afflurish,
    LinearDiscord,
    OpenAnimeAPI,
    DungeonTracker,
    WorkTimeManager,
    Acirhia,
];

export { Acirhia, Afflurish, DungeonTracker, FiresideBOT, LinearDiscord, OpenAnimeAPI, WorkTimeManager };

export default FullStackProjects;
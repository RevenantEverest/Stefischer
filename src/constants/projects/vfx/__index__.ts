import type { MotionGraphicsProject } from '@@types/Portfolio';

import * as DTMZombie from './dtmZombie';
import * as HecticBoomer from './hecticBoomer';
import * as RevenantEverest from './revenantEverest';

/* Used for sorting display of projects when mapped */
const MotionGraphicsProjects: MotionGraphicsProject[] = [
    HecticBoomer.Screen,
    HecticBoomer.Transition,
    DTMZombie.Transition,
    RevenantEverest.Screen,
    HecticBoomer.Overlay
];

export { DTMZombie, HecticBoomer, RevenantEverest };

export default MotionGraphicsProjects;
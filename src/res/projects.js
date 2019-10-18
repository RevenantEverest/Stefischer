import Fullstack from './Projects/Fullstack';
import Frontend from './Projects/Frontend';
import Backend from './Projects/Backend';
import MotionGraphics from './Projects/MotionGraphics';
import Logos from './Projects/Logos';

const projects = [];

Fullstack.forEach(el => projects.push(el));
Frontend.forEach(el => projects.push(el));
Backend.forEach(el => projects.push(el));
MotionGraphics.forEach(el => projects.push(el));
Logos.forEach(el => projects.push(el));

export default projects;
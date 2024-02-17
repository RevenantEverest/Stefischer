import type { AllProjects, ProjectCategory } from '@@types/Portfolio';

import { motion } from 'framer-motion';

export interface ProjectCategoryBadgeProps {
    projects: AllProjects[],
    category: ProjectCategory,
    setCategoryFilter: (value: ProjectCategory) => void,
    active?: boolean
};

function ProjectCategoryBadge({ projects, category, active, setCategoryFilter }: ProjectCategoryBadgeProps) {

    const projectAmount: number = projects.filter((project) => project.category === category).length;
    const activeStyles = `
        bg-gradient-to-tr from-primary to-secondary
    `;

    return(
        <motion.div 
            className="hover:cursor-pointer"
            initial={{ y: 0 }}
            whileHover={{ y: "-0.5vh" }}
            onClick={() => setCategoryFilter(category)}
        >
            <div
                className={`
                    flex bg-secondary px-5 py-1 rounded-full
                    ${active && activeStyles}
                `}
            >
                <p className="font-semibold">{category}</p>
                <p className="font-bold ml-2">{projectAmount}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCategoryBadge;
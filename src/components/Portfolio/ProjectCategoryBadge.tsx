import type { AllProjects, ProjectCategory } from '@@types/Portfolio';
import type { RootState } from '@@store/index';

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { colors } from '@@utils';

export interface ProjectCategoryBadgeProps {
    projects: AllProjects[],
    category: ProjectCategory,
    setCategoryFilter: (value: ProjectCategory) => void,
    active?: boolean
};

function ProjectCategoryBadge({ projects, category, active, setCategoryFilter }: ProjectCategoryBadgeProps) {

    const currentTheme = useSelector((state: RootState) => state.theme);
    const secondaryContrast = colors.hexToContrast(currentTheme.colors.secondary, currentTheme.colors.text);

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
                    ${secondaryContrast >= 3 ? "text-white" : (active ? "text-white": "text-black")}
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
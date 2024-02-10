import type { ProjectCategory } from '@@types/Portfolio';

import { motion } from 'framer-motion';

export interface ProjectCategoryBadgeProps {
    category: ProjectCategory,
    setCategoryFilter: (value: ProjectCategory) => void,
    active?: boolean
};

function ProjectCategoryBadge({ category, active, setCategoryFilter }: ProjectCategoryBadgeProps) {

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
                    bg-secondary px-5 py-1 rounded-full
                    ${active && activeStyles}
                `}
            >
                <p className="font-semibold">{category}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCategoryBadge;
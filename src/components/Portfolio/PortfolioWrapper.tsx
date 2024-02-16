import type { ProjectCategory, AllProjects } from '@@types/Portfolio';

import { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence } from 'framer-motion';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { TextInput } from '@@components/Common';
import ProjectCategoryBadge from './ProjectCategoryBadge';
import PortfolioSingleProject from './PortfolioSingleProject';

import { PROJECT_CATEGORIES } from '@@constants';

export interface PortfolioWrapperProps {
    projects: AllProjects[]
};

function PortfolioWrapper({ projects }: PortfolioWrapperProps) {

    const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>("Full-Stack");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const renderCategoryBadges = () => {
        return PROJECT_CATEGORIES.CATEGORIES.map((category, index) => (
            <ProjectCategoryBadge 
                key={`category-${index}`} 
                category={category}
                active={categoryFilter === category}
                setCategoryFilter={setCategoryFilter}
            />
        ));
    };

    const renderProjects = () => {
        const filterByCategory = projects.filter((project) => project.category === categoryFilter);
        const searchFilter = filterByCategory.filter((project) => {
            const projectTitle = project.title.toLowerCase();
            const search = searchQuery.toLowerCase();

            const titleSearch = projectTitle.indexOf(search) !== -1;

            return titleSearch;
        });

        return searchFilter.map((project, index) => {
            const key = `project-${project.title}-${index}`;
            return <PortfolioSingleProject key={key} index={index} project={project} />
        });
    };

    return(
        <Flex className="w-full justify-center items-center flex-col gap-6">
            <Box className="w-full md:w-3/6">
                <TextInput
                    id="search"
                    type="text"
                    icon={faSearch}
                    placeholder="Search project names, technologies"
                    onChange={(e) => setSearchQuery(e.currentTarget.value)}
                    onBlur={(e) => setSearchQuery(e.currentTarget.value)}
                    value={searchQuery}
                />
            </Box>
            <Box className="flex gap-4 flex-wrap justify-center">
                {renderCategoryBadges()}
            </Box>
            <Box 
                className={`
                    flex 
                    ${PROJECT_CATEGORIES.DEVELOPER_CATEGORIES.includes(categoryFilter) && "flex-col"} 
                    flex-wrap 
                    gap-10 
                    pt-10 
                    w-full
                    justify-center
                `}
            >
                <AnimatePresence mode="wait">
                    {renderProjects()}
                </AnimatePresence>
            </Box>
        </Flex>
    );
};

export default PortfolioWrapper;
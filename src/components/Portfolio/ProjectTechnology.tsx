import { Box } from 'reflexbox';
import { motion } from 'framer-motion';

export interface ProjectTechnologiesProps {
    technology: string
};

function ProjectTechnology({ technology }: ProjectTechnologiesProps) {

    return(
        <motion.div
            className="hover:cursor-default mb-3"
            initial={{ y: 0 }}
            whileHover={{ y: "-0.8vh" }}
        >
            <Box className="bg-primary py-1 px-3.5 rounded-full">
                <p className="font-bold text-xs text-white">{technology}</p>
            </Box>
        </motion.div>
    );
};

export default ProjectTechnology;
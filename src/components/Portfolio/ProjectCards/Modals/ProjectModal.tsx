import type { Project } from '@@types/Portfolio';

import { Flex, Box } from 'reflexbox';
import { Modal } from '@@components/Common';

export interface ProjectModalProps {
    project: Project,
    visible: boolean, 
    setVisible: (value: false) => void
};

function MotionGraphicsProjectModal({ project, visible, setVisible }: ProjectModalProps) {

    return(
        <Modal motionKey={`${project.title}-modal`} visible={visible} setVisible={setVisible}>
            <Flex className="flex-col items-center">
                <Box>
                    <div className="flex items-center justify-center mb-10">
                        <img 
                            className="rounded-3xl w-9/12" 
                            src={project.thumbnailUrl} 
                            alt={project.title}
                        />
                    </div>
                </Box>
                <Box className="w-full">
                    <h1 className="text-3xl font-bold text-text text-center mb-5">{project.title}</h1>                        
                </Box>
            </Flex>
        </Modal>
    );
};

export default MotionGraphicsProjectModal;
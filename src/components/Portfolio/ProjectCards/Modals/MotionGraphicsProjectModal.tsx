import type { MotionGraphicsProject } from '@@types/Portfolio';

import { Flex, Box } from 'reflexbox';
import { FaTwitch } from 'react-icons/fa';

import { Modal, Button, YouTubeEmbed } from '@@components/Common';

export interface MotionGraphicsProjectModalProps {
    project: MotionGraphicsProject,
    visible: boolean, 
    setVisible: (value: false) => void
};

function MotionGraphicsProjectModal({ project, visible, setVisible }: MotionGraphicsProjectModalProps) {

    return(
        <Modal motionKey={`${project.title}-modal`} visible={visible} setVisible={setVisible}>
            <Flex className="flex-col items-center">
                <Box>
                    <div className="h-[50vh] min-w-[50vw] flex items-center justify-center">
                        <div className="h-5/6 w-5/6">
                            <YouTubeEmbed title={`${project.title}-video-`} source={project.videoUrl} />
                        </div>
                    </div>
                </Box>
                <Box className="w-full">
                    <h1 className="text-3xl font-bold text-text text-center mb-5">{project.title}</h1>                        
                </Box>
                <Box className="flex justify-center gap-2 w-full">
                    <a href={project.twitchChannel} target="_blank" rel="noopener noreferrer">
                        <Button color="secondary" size="sm" className="px-6">
                            <FaTwitch className="mr-2 text-lg" />
                            <p className="font-bold">View Twitch Channel</p>
                        </Button>
                    </a>
                </Box>
            </Flex>
        </Modal>
    );
};

export default MotionGraphicsProjectModal;
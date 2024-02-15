import { Flex, Box } from 'reflexbox';
import { IoImages } from 'react-icons/io5';
import { MdVideoLibrary } from 'react-icons/md';

import { youtube } from '@@utils';

export interface ProjectMediaBadgeProps {
    media: string[]
};

function ProjectMediaBadge({ media }: ProjectMediaBadgeProps) {
    const imageAmount = media.filter((url) => !youtube.isValidLink(url)).length ?? 0;
    const videoAmount = media.filter((url) => youtube.isValidLink(url)).length ?? 0;

    return(
        <Flex className="items-center gap-2">
            {
                imageAmount > 0 && 
                <Box className="flex items-center gap-2">
                    <IoImages className="text-xl" />
                    <p className="font-semibold">{imageAmount}</p>
                </Box>
            }
            {
                videoAmount > 0 && 
                <Box className="flex items-center gap-2">
                    <MdVideoLibrary className="text-xl" />
                    <p className="font-semibold">{videoAmount}</p>
                </Box>
            }
        </Flex>
    );
};

export default ProjectMediaBadge;
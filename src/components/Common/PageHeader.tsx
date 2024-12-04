import React from 'react';
import { Flex, Box } from 'reflexbox';

import WaveDivider from './Dividers/WaveDivider';

export interface PageHeaderProps {
    title: string
};

function PageHeader({ title }: PageHeaderProps) {

    return(
        <React.Fragment>
            <Flex className="fixed w-full">
                <Box className="flex w-full h-11/12 py-10 lg:py-20 px-4 md:px-40 bg-linear-to-tr/srgb from-primary to-secondary justify-center items-center">
                    <Flex className="h-[70vh] md:h-[66vh] lg:h-[40vh] pt-32">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-white/30">
                            {title}
                        </h1>
                    </Flex>
                </Box>
            </Flex>
            <Flex className="absolute left-0 right-0 top-[36.2vh] md:top-[60.2vh] lg:top-[36.2vh] justify-center">
                <WaveDivider />
            </Flex>
        </React.Fragment>
    );
};

export default PageHeader;
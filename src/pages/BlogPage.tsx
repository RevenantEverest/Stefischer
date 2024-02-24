import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { WaveDivider, Layout, Button, BeamMeUp } from '@@components/Common';

function BlogPage() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer - About</title>
            </Helmet>
            <Flex className="fixed w-full">
                <Box className="flex w-full h-11/12 py-10 lg:py-20 px-4 md:px-40 bg-gradient-to-tr from-primary to-secondary justify-center items-center">
                    <Flex className="h-[70vh] md:h-[66vh] lg:h-[40vh] pt-32">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-white/20">Blog</h1>
                    </Flex>
                </Box>
            </Flex>
            <Flex className="absolute left-0 right-0 top-[36.2vh] md:top-[60.2vh] lg:top-[36.2vh] justify-center">
                <WaveDivider />
            </Flex>
            <Flex className="relative bg-background w-full justify-center top-[56vh] md:top-[80vh] lg:top-[56vh] pt-20 overflow-hidden">
                <Layout>
                    <div className="pb-0 flex flex-col items-center justify-center gap-10">
                        <h1 className="text-5xl font-bold text-center uppercase">Section coming soon...</h1>
                        <Link to="/">
                            <Button color="gradient" size="lg">
                                <p className="font-semibold text-white">Take me back to safety!</p>
                            </Button>
                        </Link>
                    </div>
                    <div className="pt-32">
                        <BeamMeUp />
                    </div>
                </Layout>
            </Flex>
        </React.Fragment>
    );
};

export default BlogPage;
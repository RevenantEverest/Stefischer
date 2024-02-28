import React from 'react';
import { Flex } from 'reflexbox';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { PageHeader, Layout, Button, BeamMeUp } from '@@components/Common';

function BlogPage() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer - About</title>
            </Helmet>
            <PageHeader title="Blog" />
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
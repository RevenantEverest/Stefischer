import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Helmet } from 'react-helmet';

import { WaveDivider, Layout } from '@@components/Common';
import ContactSection from '@@components/Contact/ContactSection';

function ContactPage() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer - Contact</title>
            </Helmet>
            <Flex className="fixed w-full">
                <Box className="flex w-full h-5/6 py-20 px-4 md:px-40 bg-gradient-to-tr from-primary to-secondary justify-center items-center">
                    <Flex className="h-[70vh] md:h-[66vh] lg:h-[40vh] pt-32">
                        <h1 className="text-8xl font-bold uppercase text-white/20">Contact</h1>
                    </Flex>
                </Box>
            </Flex>
            <Flex className="absolute left-0 right-0 top-[66.2vh] md:top-[66.2vh] lg:top-[36.2vh] justify-center bg-red-500">
                <WaveDivider />
            </Flex>
            <Flex className="relative bg-background w-full justify-center top-[56vh] pt-20">
                <Layout>
                    <div className="my-32">
                        <ContactSection />
                    </div>
                </Layout>
            </Flex>
        </React.Fragment>
    );
};

export default ContactPage;
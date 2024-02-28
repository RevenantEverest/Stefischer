import React from 'react';
import { Flex } from 'reflexbox';
import { Helmet } from 'react-helmet';

import { PageHeader, Layout, BeamMeUp } from '@@components/Common';
import ContactSection from '@@components/Contact/ContactSection';

function ContactPage() {
    return(
        <React.Fragment>
            <Helmet>
                <title>Stefan Fischer - Contact</title>
            </Helmet>
            <PageHeader title="Contact" />
            <Flex className="relative bg-background w-full justify-center top-[56vh] pt-20">
                <Layout>
                    <div className="my-32">
                        <ContactSection />
                    </div>
                    <div>
                        <BeamMeUp />
                    </div>
                </Layout>
            </Flex>
        </React.Fragment>
    );
};

export default ContactPage;
import React from 'react';
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
            <Layout main>
                <div className="my-32 w-full">
                    <ContactSection />
                </div>
                <div className="mb-20">
                    <BeamMeUp />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
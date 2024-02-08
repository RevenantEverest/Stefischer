import { connect } from 'react-redux';

import { ContactPage } from '@@pages/index';

function ContactContainer() {
    return(
        <ContactPage />
    );
};

const ContactReduxContainer = connect()(ContactContainer);

export default ContactReduxContainer;
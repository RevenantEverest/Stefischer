import { connect } from 'react-redux';

import { AboutPage } from '@@pages/index';

function AboutContainer() {
    return(
        <AboutPage />
    );
};

const AboutReduxContainer = connect()(AboutContainer);

export default AboutReduxContainer;
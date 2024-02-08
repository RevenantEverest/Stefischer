import { connect } from 'react-redux';

import { HomePage } from '@@pages/index';

function HomeContainer() {
    return(
        <HomePage />
    );
};

const HomeReduxContainer = connect()(HomeContainer);

export default HomeReduxContainer;
import { connect } from 'react-redux';

import { PortfolioPage } from '@@pages/index';

function PortfolioContainer() {
    return(
        <PortfolioPage />
    );
};

const PortfolioReduxContainer = connect()(PortfolioContainer);

export default PortfolioReduxContainer;
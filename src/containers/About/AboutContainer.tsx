import { connect } from 'react-redux';

import type { RootState } from '@@store/index';
import type { Theme } from '@@types/theme';

import { AboutPage } from '@@pages/index';

export interface AboutContainerState {
    theme: Theme
};

export interface AboutContainerProps extends AboutContainerState {

};

function mapStateToProps(state: RootState): AboutContainerState {
    return {
        theme: state.theme
    };
};

function AboutContainer(props: AboutContainerProps) {
    return(
        <AboutPage {...props} />
    );
};

export default connect(
    mapStateToProps
)(AboutContainer);
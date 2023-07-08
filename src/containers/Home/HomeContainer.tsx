import { connect } from 'react-redux';

import type { RootState } from '@@store/index';
import type { Theme } from '@@types/theme';

import { HomePage } from '@@pages/index';

export interface HomeContainerState {
    theme: Theme
};

export interface HomeContainerProps extends HomeContainerState {

};

function mapStateToProps(state: RootState): HomeContainerState {
    return {
        theme: state.theme
    };
};

function HomeContainer(props: HomeContainerProps) {
    return(
        <HomePage {...props} />
    );
};

export default connect(
    mapStateToProps
)(HomeContainer);
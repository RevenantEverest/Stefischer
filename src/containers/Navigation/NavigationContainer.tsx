import { connect } from 'react-redux';

import type { RootState } from '@@store/index';
import type { Theme } from '@@types/theme';

import Navigation from '@@navigation/index';

export interface NavigationContainerState {
    theme: Theme
};

export interface NavigationContainerProps extends NavigationContainerState {
    container: JSX.Element
};

function mapStateToProps(state: RootState): NavigationContainerState {
    return {
        theme: state.theme
    };
};

function NavigationContainer(props: NavigationContainerProps) {
    return(
        <Navigation {...props} />
    );
};

const NavigationReduxContainer = connect(
    mapStateToProps
)(NavigationContainer);

export default NavigationReduxContainer;
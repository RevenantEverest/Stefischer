import type { RootState, AppDispatch } from '@@store/index';
import type { Theme } from '@@types/theme';

import { connect } from 'react-redux';
import { themeActions } from '@@store/actions';

import ThemeChanger from '@@components/ThemeChanger/ThemeChanger';

export interface ThemeChangerContainerState {
    theme: Theme
};

export interface ThemeChangerContainerDispatch {
    setTheme: (theme: Theme) => void
};

export interface ThemeChangerContainerProps extends
    ThemeChangerContainerState, ThemeChangerContainerDispatch {

};



function mapStateToProps(state: RootState): ThemeChangerContainerState {
    return {
        theme: state.theme
    };
};

function mapDispatchToProps(dispatch: AppDispatch) {
    return {
        setTheme: (theme: Theme) => dispatch(themeActions.setTheme(theme))
    };
};

function ThemeChangerContainer(props: ThemeChangerContainerProps) {
    return(
        <ThemeChanger {...props} />
    );
};

const ThemeChangerReduxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeChangerContainer);

export default ThemeChangerReduxContainer;
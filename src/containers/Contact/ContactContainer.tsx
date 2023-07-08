import { connect } from 'react-redux';

import type { RootState } from '@@store/index';
import type { Theme } from '@@types/theme';

import { ContactPage } from '@@pages/index';

export interface ContactContainerState {
    theme: Theme
};

export interface ContactContainerProps extends ContactContainerState {

};

function mapStateToProps(state: RootState): ContactContainerState {
    return {
        theme: state.theme
    };
};

function ContactContainer(props: ContactContainerProps) {
    return(
        <ContactPage {...props} />
    );
};

export default connect(
    mapStateToProps
)(ContactContainer);
import { connect } from 'react-redux';

import { BlogPage } from '@@pages/index';

function BlogContainer() {
    return(
        <BlogPage />
    );
};

const BlogReduxContainer = connect()(BlogContainer);

export default BlogReduxContainer;
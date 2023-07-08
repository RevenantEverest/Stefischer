import type { Theme } from '@@types/theme';

export interface AboutPageProps {
    theme: Theme
};

function AboutPage(props: AboutPageProps) {
    return(
        <div>
            <h1>About Page</h1>
            <div className="h-1/4 w-1/4">
            </div>
        </div>
    );
};

export default AboutPage;
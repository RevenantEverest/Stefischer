import Lottie from 'lottie-react';
import programmingAnimation from '../lottie/programming-computer.json';

import type { Theme } from '@@types/theme';

export interface HomePageProps {
    theme: Theme
};

function HomePage(props: HomePageProps) {
    return(
        <div>
            <h1>Home Page</h1>
            <div className="h-1/4 w-1/4">
                <Lottie animationData={programmingAnimation} />
            </div>
        </div>
    );
};

export default HomePage;
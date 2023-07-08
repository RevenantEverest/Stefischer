import type { Theme } from '@@types/theme';

export interface ContactPageProps {
    theme: Theme
};

function ContactPage(props: ContactPageProps) {
    return(
        <div>
            <h1>About Page</h1>
            <div className="h-1/4 w-1/4">
            </div>
        </div>
    );
};

export default ContactPage;
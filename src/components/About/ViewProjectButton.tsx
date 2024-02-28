import { Link } from 'react-router-dom';
import { Button } from '@@components/Common';

export interface ViewProjectButtonProps {
    to?: string
};

function ViewProjectButton({ to }: ViewProjectButtonProps) {
    return(
        <div className="w-full md:w-1/2">
            <Link to={to ?? "/portfolio"}>
                <Button color="secondary">
                    <p className="font-semibold">View Project</p>
                </Button>
            </Link>
        </div>
    );
};

export default ViewProjectButton;
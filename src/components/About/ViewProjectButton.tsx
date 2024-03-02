import { useState } from 'react';
import { Button } from '@@components/Common';
import React from 'react';

export interface ViewProjectButtonProps {
    modalComponent: React.FC<{ visible: boolean, setVisible: (value: boolean) => void }>
};

function ViewProjectButton({ modalComponent }: ViewProjectButtonProps) {

    const [visible, setVisible] = useState(false);

    return(
        <div className="w-full md:w-1/2">
            <Button color="secondary" onClick={() => setVisible(true)}>
                <p className="font-semibold">View Project</p>
            </Button>
            {modalComponent({ visible, setVisible })}
        </div>
    );
};

export default ViewProjectButton;
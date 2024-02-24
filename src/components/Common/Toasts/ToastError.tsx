import type { Toast, ToastPosition } from 'react-hot-toast';

import { Flex, Box } from 'reflexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card';

export interface ToastErrorProps {
    toast: Toast,
    position?: ToastPosition,
    duration?: number,
    message: string | JSX.Element
};

function ToastError({ toast, position="top-right", duration=3000, message }: ToastErrorProps) {

    toast.duration = duration;
    toast.position = position;

    const renderMessage = () => {
        if(typeof message === "string") {
            return(
                <p className={`text-text`}>{message}</p>
            );
        }

        return message;
    };

    return(
        <Card className="bg-card-light shadow-md shadow-red-800 border-[1px] border-red-700">
            <Flex>
                <Box className="pr-3">
                    <FontAwesomeIcon className="text-red-500" icon={faCircleXmark} />
                </Box>
                <Box>
                    {renderMessage()}
                </Box>
            </Flex>
        </Card>
    );
};

export default ToastError;
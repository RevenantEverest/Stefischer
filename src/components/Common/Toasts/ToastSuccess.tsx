import type { Toast, ToastPosition } from 'react-hot-toast';

import { Flex, Box } from 'reflexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card';

export interface ToastSuccessProps {
    toast: Toast,
    position?: ToastPosition,
    duration?: number,
    message: string
};

function ToastSuccess({ toast, position="top-right", duration=3000, message }: ToastSuccessProps) {

    toast.duration = duration;
    toast.position = position;

    return(
        <Card className="bg-card-light shadow-md shadow-green-500 border-[1px] border-green-700">
            <Flex>
                <Box className="pr-3">
                    <FontAwesomeIcon className={`text-green-500`} icon={faCircleCheck} />
                </Box>
                <Box>
                    <p className={`text-text`}>{message}</p>
                </Box>
            </Flex>
        </Card>
    );
};

export default ToastSuccess;
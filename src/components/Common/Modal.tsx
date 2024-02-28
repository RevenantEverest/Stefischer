import React from 'react';
import { createPortal } from 'react-dom';
import { Flex, Box } from 'reflexbox';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

import { Card } from '@@components/Common';

export interface ModalProps {
    motionKey: string,
    visible: boolean,
    setVisible: (value: false) => void
};

function Modal({ motionKey, visible, setVisible, children }: React.PropsWithChildren<ModalProps>) {

    const renderContent = () => {
        return(
            <React.Fragment>
                <motion.div 
                    key={motionKey + "-bg"}
                    className="fixed z-[1040] h-[100vh] w-[100vw] top-0 left-0 bg-black/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
                <motion.div
                    key={motionKey}
                    className="fixed z-[1050] w-full h-full top-0 left-0"
                    initial={{ opacity: 0, y: "-30vh" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-30vh" }}
                >
                    <Flex 
                        className="flex h-full items-center justify-center" 
                        onClick={() => setVisible(false)}
                    >
                        <Box onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
                            <Card className="rounded-2xl max-h-[96vh] w-[98vw] md:w-[60rem] overflow-y-scroll">
                                <div className="relative top-0 right-0">
                                    <div className="absolute top-0 right-0">
                                        <Flex className="items-end justify-end">
                                            <FaTimes 
                                                className="hover:cursor-pointer" 
                                                onClick={() => setVisible(false)} 
                                            />
                                        </Flex>
                                    </div>
                                </div>
                                {children}
                            </Card>
                        </Box>
                    </Flex>
                </motion.div>
            </React.Fragment>
        );
    };

    return createPortal(
        <AnimatePresence mode="wait">
            {visible && renderContent()}
        </AnimatePresence>
    , document.body)
};

export default Modal;
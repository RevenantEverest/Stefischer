import type { IconType } from 'react-icons/lib';

import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Card } from '@@components/Common';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface TimelineItemProps {
    icon: IconType,
    date: string,
    title: string,
    description: string,
    renderSide?: "left" | "right"
};

function TimelineItem({ icon, date, title, description, renderSide="right" }: TimelineItemProps) {

    const IconComponent = icon;
    const isDefaultSide = renderSide === "right";

    const Date = (
        <Box className="absolute">
            <div className={`relative top-3.5 ${isDefaultSide ? "left-14" : "-left-[12.5rem]"} w-[12rem]`}>
                <p 
                    className={`
                        font-semibold text-sm 
                        ${isDefaultSide ? "text-left" : "text-right"}
                    `}
                >
                    {date}
                </p>
            </div>
        </Box>
    );

    const renderContent = () => {
        return(
            <div 
                className={`
                    relative 
                    ${isDefaultSide ? "left-[50%]" : "right-[50%]"}
                `}
            >
                <Flex 
                    className={`
                        flex-col
                        gap-2
                        border-card-light 
                        ${isDefaultSide ? "border-l-2 pl-7" : "border-r-2 pr-7"}
                    `}
                >
                    <Box className="py-8 relative">
                        <Card>
                            <p className="font-bold text-lg text-secondary">
                                {title}
                            </p>
                            <p className="font-semibold">{description}</p>
                        </Card>
                        {
                            isDefaultSide ? 
                            <FaCaretLeft className="absolute text-6xl -left-9 top-[15%] text-card" /> : 
                            <FaCaretRight className="absolute text-6xl -right-9 top-[15%] text-card" />
                        }
                    </Box>
                </Flex>
            </div>
        );
    };

    return(
        <React.Fragment>
            <Box>
                <Flex>
                    {Date}
                    <Box className="flex h-12 w-12 bg-card-light rounded-full items-center justify-center">
                        <Box className="flex h-8 w-8 bg-secondary rounded-full items-center justify-center">
                            <IconComponent className="text-sm" />
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box className="w-3/6">
                {renderContent()}
            </Box>
        </React.Fragment>
    );
};

export default TimelineItem;
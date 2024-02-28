import React from 'react';

export interface TimelineDataPoint {
    date: string,
    title: string,
    description: string,
    extraContent?: React.FC
};

export type TimelineOrientation = "left" | "right";
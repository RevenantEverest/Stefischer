import React, { PropsWithChildren } from 'react';

import { Flex } from 'reflexbox';

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
    main?: boolean,
    transparent?: boolean
};

function Layout({ className, main, transparent, children, ...rest }: PropsWithChildren<LayoutProps>) {

    const bgColor = transparent ? "bg-transparent" : "bg-background";
    const mainStyles = main && "top-[56vh]";

    return(
        <Flex 
            className={`
                flex-col
                w-full
                relative 
                px-5 
                lg:px-52
                pt-20 
                pointer-events-auto 
                items-center
                justify-center
                ${mainStyles}
                ${bgColor} ${className}
            `} 
            {...rest}
        >
            {children}
        </Flex>
    );
};

export default Layout;
import { PropsWithChildren } from 'react';

import { Flex } from 'reflexbox';

function Layout({ children }: PropsWithChildren) {
    return(
        <Flex className="py-20 w-full lg:w-5/6">
            <Flex className="px-4 md:px-16 w-full justify-center flex-col">
                {children}
            </Flex>
        </Flex>
    );
};

export default Layout;
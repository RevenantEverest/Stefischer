import { useEffect, useState } from 'react';

interface Dimensions {
    width: number,
    height: number
};

function useWindowDimensions(): Dimensions {
    const [dimensions, setDimension] = useState<Dimensions>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const updateDimensions = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    });

    return dimensions;
};

export default useWindowDimensions;
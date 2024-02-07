interface TiltDividerProps {
    flip?: boolean,
    rotate?: boolean
};

function TiltDivider({ flip, rotate }: TiltDividerProps) {

    const flipStyles = flip && {
        style: {
            transform: "rotateY(180deg)"
        }
    };

    const rotateStyles = rotate && {
        style: {
            transform: "rotate(180deg)"
        }
    };

    return(
        <div 
            className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]"
            {...rotateStyles}
        >
            <svg 
                className="relative block h-[150px] w-full"
                {...flipStyles}
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
            >
                <path 
                    className="fill-background" 
                    d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                />
            </svg>
        </div>
    );
};

export default TiltDivider;
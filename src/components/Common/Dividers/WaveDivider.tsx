
function WaveDivider() {
    return(
        <div className="relative">
            <div 
                className="absolute -bottom-1 left-0 w-full overflow-hidden transform leading-[0]" 
                style={{ 
                    transform: "rotate(180deg)"
                }}
            >
                <svg 
                    className="relative block h-[20vh] right-72 md:right-0 w-[220vw] md:w-full"
                    style={{ 
                        transform: "calc(100% + 1.3px)" 
                    }}
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        className="fill-background"
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default WaveDivider;
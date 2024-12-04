import type { MotionProps } from 'motion/react';
import type { RootState } from '@@store/index';

import React from 'react';
import { Spinner } from 'flowbite-react';
import { motion } from 'motion/react';
import { useSelector } from 'react-redux';

import { colors } from '@@utils';

export type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type PropExtenders = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

export interface ButtonProps extends PropExtenders {
    color?: "primary" | "secondary" | "accent" | "gradient" | "white",
    size?: ButtonSizes,
    spinnerSize?: ButtonSizes,
    outlined?: boolean,
    loading?: boolean
};

function Button({ color="primary", size="md", outlined, loading, children, className="", ...rest }: ButtonProps) {

    const currentTheme = useSelector((state: RootState) => state.theme);
    const primaryContrast = colors.hexToContrast(currentTheme.colors.primary, currentTheme.colors.text);
    const secondaryContrast = colors.hexToContrast(currentTheme.colors.secondary, currentTheme.colors.text);

    const renderSpinner = () => (
        <Spinner size={size} />
    );

    const colorStyles = {
        "primary": outlined ? "border-2 border-primary text-primary" : `bg-primary ${primaryContrast >= 3 ? "text-white" : "text-black"}`,
        "secondary": outlined ? "border-2 border-secondary" : `bg-secondary ${secondaryContrast >= 3 ? "text-white" : "text-black"}`,
        "accent": outlined ? "border-2 border-accent text-background" : "bg-accent text-background",
        "gradient": `bg-linear-to-tr/srgb from-primary to-secondary ${outlined ? "first:text-white" : `hover:shadow-lg hover:shadow-[#00f3c] ${secondaryContrast >= 3 ? "text-white" : "text-black"}`}`,
        "white": outlined ? "border-2 border-white" : "bg-white text-background"
    };

    const sizeStyles = {
        "xs": "w-14 py-1 text-xs",
        "sm": "py-1 text-xs",
        "md": "px-4 py-1.5 text-sm",
        "lg": "px-6 py-2.5 text-md",
        "xl": "px-5 py-2.5 text-lg"
    };

    const buttonClassNames = `
        ${colorStyles[color]}
        rounded p-0.5 items-center justify-center 
        border-0 flex h-min text-center
        ${className}
    `;

    const spanClassNames = `
        ${sizeStyles[size]}
        w-full rounded border border-transparent 
        flex items-center justify-center z-10 
        font-medium
        ${(color === "gradient" && outlined) && "bg-background"}
    `;

    return(
        <motion.button
            className={buttonClassNames}
            whileHover={{
                y: "-.5vh"
            }}
            {...rest}
        >
            <span className={spanClassNames}>
                {loading ? renderSpinner() : children}
            </span>
        </motion.button>
    );
};

export default Button;
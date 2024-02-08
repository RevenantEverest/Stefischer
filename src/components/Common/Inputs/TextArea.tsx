import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
    icon?: IconProp,
    iconRight?: boolean,
    iconClassName?: string,
    errorMessage?: string
};

function TextArea({ id="", className="", label, icon, iconRight, iconClassName="", errorMessage, ...rest }: TextAreaProps) {

    const baseInputClassName = `
        block w-full border 
        disabled:cursor-not-allowed 
        disabled:opacity-50 
        bg-card-light 
        ${errorMessage ? "border-red-500" : "border-card-light"} 
        text-text 
        rounded-lg 
        p-2.5
        text-sm
        placeholder:text
        ${(icon && !iconRight) && "pl-10"} 
    `;

    const focusInputClassName = `
        focus:border-secondary 
        focus:ring-secondary
    `;

    const renderIcon = (faIcon: IconProp) => {
        const iconContainerClassName = `
            pointer-events-none absolute flex items-center p-3
            ${iconRight ? "inset-y-0 right-0 pr-3" : "inset-y-0 left-0 pl-3"}
        `;

        return(
            <div className={`${iconContainerClassName}`}>
                <FontAwesomeIcon className={`${iconClassName}`} icon={faIcon} />
            </div>
        );
    };

    const renderErrorMessage = () => {
        return(
            <p className="text-red-500 text-sm">{errorMessage}</p>
        );
    };

    const renderLabel = () => (
        <div>
            <p className="text-sm font-semibold">{label}</p>
        </div>
    );

    return(
        <React.Fragment>
            {label && renderLabel()}
            <div className={`relative w-full ${label && "mt-1.5"}`}>
                {icon && renderIcon(icon)}
                <textarea
                    id={id}
                    className={`${baseInputClassName} ${focusInputClassName} ${className}`}
                    {...rest}
                />
            </div>
            {errorMessage && renderErrorMessage()}
        </React.Fragment>
    );
};

export default TextArea;
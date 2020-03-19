import React from 'react';
import '../css/button.css';

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid"
] 

const SIZES = [
    "btn--small",
    "btn--medium",
    "btn--large"
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    console.log(buttonSize);

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
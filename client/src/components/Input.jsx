import React from 'react';
import '../css/input.css';

const STYLE = [
    "input--valid",
    "input--invalid"
]

export const Input = ({
    type,
    value,
    placeholder,
    inputStyle,
    onChange

}) => {

    const checkInputStyle = STYLE.includes(inputStyle) ? inputStyle : STYLE[0]; 

    return(
    <input className={`input ${inputStyle}`} type={type} placeholder={placeholder} onChange={onChange}>
        {value}
    </input>
    );
}
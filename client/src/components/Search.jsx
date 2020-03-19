import React from 'react';
import '../css/search.css';

const STYLE = [
    "input--valid",
    "input--invalid"
]

export const Search = ({
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
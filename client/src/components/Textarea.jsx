import React from 'react';
import '../css/textarea.css';

const STYLE = [
    "ta--valid",
    "ta--invalid"
]

export const Textarea = ({
    type,
    value,
    placeholder,
    inputStyle,
    onChange

}) => {

    const checkInputStyle = STYLE.includes(inputStyle) ? inputStyle : STYLE[0]; 

    return(
    <textarea className={`textarea ${inputStyle}`} type={type} placeholder={placeholder} onChange={onChange}>
        {value}
    </textarea>
    );
}
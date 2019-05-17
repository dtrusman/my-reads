import React from 'react';
import './Loader.css';

interface Props {
    text?: string;
    className?: string;
}

export default function Loader(props: Props) {
    return (
        <div className="container">
            <div className={`loader ${props.className}`}></div>
            <div className="label">{props.text}</div>
        </div>
    )
}
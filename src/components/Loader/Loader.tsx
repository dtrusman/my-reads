import React from 'react';
import './Loader.css';

interface Props {
    text?: string;
}

export default function Loader(props: Props) {
    return (
        <div className="container">
            <div className="loader"></div>
            <div className="label">{props.text}</div>
        </div>
    )
}
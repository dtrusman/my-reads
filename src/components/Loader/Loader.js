import React from 'react';
import './Loader.css';

export default function Loader(props) {
    return (
        <div className="container">
            <div className={`loader ${props.className}`}></div>
            <div className="label">{props.text}</div>
        </div>
    )
}
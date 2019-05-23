import React from 'react';

const Badge = (props) => {

    let className;
    switch (props.text) {
        case 'read':
            className = 'badge-read';
            break;
        case 'wantToRead':
            className = 'badge-want';
            break;
        case 'currentlyReading':
            className = 'badge-reading';
            break;
        default:
            break;
    }

    return (
        <div className={`card-shelf ${className}`}>{props.text}</div>
    )
}

export default Badge;
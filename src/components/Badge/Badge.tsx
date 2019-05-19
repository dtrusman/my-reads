import React from 'react';

interface Props {
    text: string;
}

const Badge = (props: Props) => {

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
    }

    return (
        <div className={`card-shelf ${className}`}>{props.text}</div>
    )
}

export default Badge;
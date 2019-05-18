import React from 'react';

interface Props {
    text: string;
    className?: string;
}

const Empty = ({text, className}: Props) => {
    return (
        <div className={className}> {text} </div>
    )
}

export default Empty;
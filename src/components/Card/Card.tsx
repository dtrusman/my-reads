import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const Card = (props: Props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card;
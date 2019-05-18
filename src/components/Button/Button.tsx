import React from 'react';

interface Props {
    text?: string;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = (props: Props) => {
    return <button className={props.className} onClick={props.onClick}>{props.text}</button>
}

export default Button;
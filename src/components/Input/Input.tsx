import React from 'react';

interface Props {
    type: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
    return <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
}

export default Input;
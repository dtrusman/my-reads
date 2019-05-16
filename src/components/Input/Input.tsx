import React from 'react';

interface Props {
    type: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
    return <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} onKeyPress={props.onKeyPress} />
}

export default Input;
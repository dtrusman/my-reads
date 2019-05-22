import React from 'react';
import { SHELVES } from '../../pages/Main';

interface Props {
    defaultValue?: string;
    onChooseOption: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Changer = ({ defaultValue, onChooseOption } : Props) => {

    const renderOptions = () => {
        return SHELVES.map(shelf => {
            return <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
        });
    }

    const handleChange = evt => {
        onChooseOption(evt);
    }

    return (
        <select onChange={handleChange} defaultValue={defaultValue}>
            <option key="move" value="move" disabled>Move to...</option>
            {renderOptions()}
        </select>
    )
}

export default Changer;
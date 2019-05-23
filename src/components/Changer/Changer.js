import React from 'react';
import { SHELVES } from '../../pages/Main';

const Changer = ({ defaultValue, onChooseOption }) => {

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
import React from 'react';
import { SHELVES } from '../../pages/Main';

const Changer = () => {

    const renderOptions = () => {
        return SHELVES.map(shelf => (
            <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
        ))
    }

    return (
        <select>
            <option key="move" value="move" disabled>Move to...</option>
            {renderOptions()}
            <option key="none" value="none">None</option>
        </select>
    )
}

export default Changer;
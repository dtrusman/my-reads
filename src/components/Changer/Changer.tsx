import React from 'react';
import { SHELVES } from '../../pages/Main';

const Changer = () => {

    const renderOptions = () => {
        return SHELVES.map(shelf => (
            <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
        ))
    }

    return (
        <div className="book-shelf-changer">
            <select>
                <option key="move" value="move" disabled>Move to...</option>
                { renderOptions() }
                <option key="none" value="none">None</option>
            </select>
        </div>
    )
}

export default Changer;
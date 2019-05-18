import React from 'react';
import { SHELVES } from '../../pages/Main';

interface Props {
    enableNone?: boolean;
    onChooseOption: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Changer = ({ enableNone = true, onChooseOption } : Props) => {

    const renderOptions = () => {
        const shelves = enableNone ? SHELVES : SHELVES.filter(s => s.id !== "none");
        return shelves.map(shelf => (
            <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
        ));
    }

    const handleClick = evt => {
        onChooseOption(evt);
    }

    return (
        <select onClick={handleClick}>
            <option key="move" value="move" disabled>Move to...</option>
            {renderOptions()}
        </select>
    )
}

export default Changer;
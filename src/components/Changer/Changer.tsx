import React from 'react';
import { SHELVES } from '../../pages/Main';

interface Props {
    disableOptions?: string;
    onChooseOption: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Changer = ({ disableOptions, onChooseOption } : Props) => {

    const renderOptions = () => {
        const shelves = SHELVES.filter(s => s.id !== disableOptions);
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
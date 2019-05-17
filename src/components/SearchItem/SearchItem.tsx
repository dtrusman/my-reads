import React from 'react';
import * as API from '../../services/BooksAPI';
import { Card, Changer } from '..';

interface Props {
    item: any;
}

const SearchItem = (props: Props) => {

    const { item } = props;

    const handleChangeShelf = async evt => {
        const { item } = props;
        const shelfID = evt.target.value;
        await API.update(item, shelfID);
    }

    return (
        <Card>
            <div className="card-title">{item.title}</div>
            <div className="image-container">
                <img className="image" src={item.imageLinks.thumbnail} alt={item.title} />
            </div>
            <div className="changer-container">
                <div className="add-book-container">
                    <Changer enableNone={false} onChooseOption={handleChangeShelf} />
                </div>
            </div>
        </Card>
    )
}

export default SearchItem;
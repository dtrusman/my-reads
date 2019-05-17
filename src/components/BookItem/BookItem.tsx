import React from 'react';
import { Changer } from '..'
import './BookItem.css';

interface Props {
    item: any;
    updateItem?: any;
}

const BookItem = (props: Props) => {

    const { item, updateItem } = props;

    const handleChangeShelf = async evt => {
        const shelfID = evt.target.value;
        updateItem(item, shelfID);
    }

    return (
        <div className="book">
            <div className="book-top">
                <img className="book-cover" src={item.imageLinks.thumbnail} alt={item.title} />
                <div className="book-shelf-changer">
                    <Changer onChooseOption={handleChangeShelf} />
                </div>
            </div>
            <div className="book-title">{item.title}</div>
            <div className="book-authors">{item.authors}</div>
        </div>
    )
}

export default BookItem;
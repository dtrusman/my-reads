import React from 'react';
import { Changer, Loader } from '..'
import './BookItem.css';

const BookItem = (props) => {

    const { item, updateItem, loading } = props;

    const handleChangeShelf = evt => {
        const shelfID = evt.target.value;
        updateItem(item, shelfID);
    }

    const renderItem = () => {
        return (
            <div>
                <div className="book-top">
                    <img className="book-cover" src={item.imageLinks.thumbnail} alt={item.title} />
                    <div className="book-shelf-changer">
                        <Changer defaultValue={item.shelf} onChooseOption={handleChangeShelf} />
                    </div>
                </div>
                <div className="book-title">{item.title}</div>
                <div className="book-authors">{item.authors}</div>
            </div>
        )
    }

    return (
        <div className="book">
            { loading ? <Loader className="loader-small" /> : renderItem() }
        </div>
    )
}

export default BookItem;
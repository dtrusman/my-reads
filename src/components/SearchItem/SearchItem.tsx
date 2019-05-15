import React from 'react';
import { Card, Button } from '..';

interface Props {
    item: any;
}

const SearchItem = (props: Props) => {

    const { item } = props;

    const handleClick = () => {
        const { item } = props;
        console.log('click search item', item);
    }

    return (
        <Card>
            <div className="card-title">{item.title}</div>
            <div className="image-container">
                <img className="image" src={item.imageLinks.thumbnail} alt={item.title} />
            </div>
            <div className="add-book-container">
                <Button className="add-book" onClick={handleClick} />
            </div>
        </Card>
    )
}

export default SearchItem;
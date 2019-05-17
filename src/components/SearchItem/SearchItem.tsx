import React from 'react';
import { Card, Changer } from '..';

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
            <div className="changer-container">
                <div className="add-book-container">
                    <Changer />
                </div>
            </div>
        </Card>
    )
}

export default SearchItem;
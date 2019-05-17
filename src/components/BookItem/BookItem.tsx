import React, { Component } from 'react';
import { Changer } from '..'
import './BookItem.css';

interface Props {
    item: any;
}

export default class BookItem extends Component<Props> {

    render() {
        const { item } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover" src={item.imageLinks.thumbnail} alt={item.title} />
                    <div className="book-shelf-changer">
                        <Changer />
                    </div>
                </div>
                <div className="book-title">{item.title}</div>
                <div className="book-authors">{item.authors}</div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { BookList } from '..';

interface Props {
    name: string;
    bookList: []
}

export default class Shelves extends Component<Props> {

    render() {
        const { name, bookList } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <BookList
                        list={bookList}
                        type="book"
                    />
                </div>
            </div>
        )
    }
}
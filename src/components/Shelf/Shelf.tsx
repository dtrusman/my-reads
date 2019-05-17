import React, { Component } from 'react';
import { BookList } from '..';

interface Props {
    name: string;
    bookList: any[];
    onUpdateList?: any;
}

export default class Shelf extends Component<Props> {

    render() {
        const { name, bookList, onUpdateList } = this.props;

        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{name}</h2>
                    <div className="bookshelf-books">
                        <BookList
                            list={bookList}
                            type="book"
                            updateBookList={onUpdateList}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
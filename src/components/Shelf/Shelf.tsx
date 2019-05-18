import React, { Component } from 'react';
import { BookList, Empty } from '..';

interface Props {
    name: string;
    bookList: any[];
    onUpdateList?: any;
    loadingItem?: boolean;
}

export default class Shelf extends Component<Props> {

    renderBookList = () => {
        const { bookList, onUpdateList, loadingItem } = this.props;

        return (
            <BookList
                list={bookList}
                type="book"
                updateBookList={onUpdateList}
                loadingItem={loadingItem}
            />
        )
    }

    render() {
        const { name, bookList } = this.props;

        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{name}</h2>
                    <div className="bookshelf-books">
                        {
                            bookList.length ? this.renderBookList() : <Empty text="Shelf Empty" />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
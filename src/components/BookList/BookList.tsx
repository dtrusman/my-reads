import React, { Component } from 'react';
import { BookItem, SearchItem } from '..';

export type ITEM_TYPE = "book" | "search";

interface Props {
    list: any[];
    type: ITEM_TYPE;
    updateBookList?: any;
}

export default class BookList extends Component<Props> {

    renderItem = item => {
        const { type, updateBookList } = this.props;
        return type === 'book' ? <BookItem key={item.id} item={item} updateItem={updateBookList} /> : <SearchItem key={item.id} item={item} />
    }

    render() {
        const { list } = this.props;

        return (
            <ol className="books-grid">
                {list.length > 0 && list.map(this.renderItem)}
            </ol>
        )
    }
}
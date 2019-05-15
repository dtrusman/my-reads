import React, { Component } from 'react';
import { BookItem, SearchItem } from '..';

export type ITEM_TYPE = "book" | "search";

interface Props {
    list: [];
    type: ITEM_TYPE
}

export default class BookList extends Component<Props> {

    renderItem = item => {
        const { type } = this.props;
        return type === 'book' ? <BookItem key={item.id} item={item} /> : <SearchItem key={item.id} item={item} />
    }

    renderEmptyList = () => {
        return <div> Empty list </div>
    }

    render() {
        const { list } = this.props;

        return (
            <ol className="books-grid">
                {list.length > 0 && list.map(this.renderItem)}

                {list.length === 0 && this.renderEmptyList()}
            </ol>
        )
    }
}